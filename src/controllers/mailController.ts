import { Request, Response, NextFunction } from 'express';
import { get } from 'lodash';

import SuccessHandler from '@helpers/successHandler/index';
import ErrorHandler from '@helpers/errorHandler/index';
import logger from '@shared/Logger';
import MailService from '@services/mailService';

const mailService = new MailService();
const successHandler = new SuccessHandler();

export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const template: string = get(req, 'body.template', '');
    const to: string = get(req, 'body.to', '');
    const subject: string = get(req, 'body.subject', '');
    const content: any = get(req, 'body.data', {});

    const data = await mailService.sendEmail(template, to, subject, content);
    successHandler.handleSuccess(200, 'Send email', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> sendEmail', error);
    next(new ErrorHandler(500, 'Mail Error'));
  }
};
