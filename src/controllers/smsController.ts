import { Request, Response, NextFunction } from 'express';
import { get } from 'lodash';

import SuccessHandler from '@helpers/successHandler/index';
import ErrorHandler from '@helpers/errorHandler/index';
import logger from '@shared/Logger';
import SMSService from '@services/SMSService';

const service = new SMSService();
const successHandler = new SuccessHandler();

export const sendSMS = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const phoneNumber: string = get(req, 'body.phoneNumber', '');
    const content: string = get(req, 'body.content', '');
    const data = await service.sendSMS(phoneNumber, content);

    successHandler.handleSuccess(200, 'sent', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> sendSMS', error);
    next(new ErrorHandler(500, 'SMS Error'));
  }
};
