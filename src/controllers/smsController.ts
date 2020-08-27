import { Request, Response, NextFunction } from 'express';
import { get } from 'lodash';

import SuccessHandler from '@helpers/successHandler/index';
import ErrorHandler from '@helpers/errorHandler/index';
import logger from '@shared/Logger';
import SMSService from '@services/smsService';

const smsService = new SMSService();
const successHandler = new SuccessHandler();

export const sendSMS = async (req: Request, res: Response, next: NextFunction) => {
  const phoneNumber = get(req, 'body.phoneNumber', '');
  const message = get(req, 'body.message', '');

  try {
    const data = await smsService.sendSMS(phoneNumber, message);
    successHandler.handleSuccess(200, 'Send SMS', res, next, { message: 'SMS Notification sent'});
  } catch (error) {
    logger.info('ERROR: controller -> sendSMS', error);
    next(new ErrorHandler(500, 'Mail Error'));
  }
};
