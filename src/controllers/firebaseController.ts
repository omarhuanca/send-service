import { Request, Response, NextFunction } from 'express';
import { get } from 'lodash';

import SuccessHandler from '@helpers/successHandler/index';
import ErrorHandler from '@helpers/errorHandler/index';
import logger from '@shared/Logger';
import Firebase from '@helpers/firebase';

const successHandler = new SuccessHandler();
const firebase = new Firebase();
const data = { message: 'Notification sent' };
const messageError = 'Firebase Notification Error';

export const sendTopic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topic: string = get(req, 'body.topic', '');
    const title: string = get(req, 'body.title', '');
    const body: string = get(req, 'body.body', '');

    await firebase.sendTopic(topic, title, body);
    successHandler.handleSuccess(200, 'sendTopic', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> sendTopic', error);
    next(new ErrorHandler(500, messageError));
  }
};

export const sendSomeOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string = get(req, 'body.token', '');
    const title: string = get(req, 'body.title', '');
    const body: string = get(req, 'body.body', '');

    await firebase.sendSomeOne(token, title, body);
    successHandler.handleSuccess(200, 'sendSomeOne', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> sendSomeOne', error);
    next(new ErrorHandler(500, messageError));
  }
};

export const sendArray = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokens: string[] = get(req, 'body.tokens', []);
    const title: string = get(req, 'body.title', '');
    const body: string = get(req, 'body.body', '');

    await firebase.sendArray(tokens, title, body);
    successHandler.handleSuccess(200, 'sendArray', res, next, data);
  } catch(error) {
    logger.info('ERROR: controller -> sendArray', error);
    next(new ErrorHandler(500, messageError));
  }
};

export const sendAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const title: string = get(req, 'body.title', '');
    const body: string = get(req, 'body.body', '');

    await firebase.sendAll(title, body);
    successHandler.handleSuccess(200, 'sendAll', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> sendAll', error);
    next(new ErrorHandler(500, messageError));
  }
};

export const subscribeTopic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string = get(req, 'body.token', '');
    const topic: string = get(req, 'body.topic', '');

    await firebase.subscribeTopic(token, topic);
    successHandler.handleSuccess(200, 'subscribeTopic', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> subscribeTopic', error);
    next(new ErrorHandler(500, messageError));
  }
};

export const unsubscribeTopic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string = get(req, 'body.token', '');
    const topic: string = get(req, 'body.topic', '');

    await firebase.unsubscribeTopic(token, topic);
    successHandler.handleSuccess(200, 'unsubscribeTopic', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> unsubscribeTopic', error);
    next(new ErrorHandler(500, messageError));
  }
};

export const turnOnNotification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string = get(req, 'body.token', '');

    await firebase.turnOnNotification(token);
    successHandler.handleSuccess(200, 'turnOnNotification', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> turnOnNotification', error);
    next(new ErrorHandler(500, messageError));
  }
};

export const turnOffNotification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string = get(req, 'body.token', '');

    await firebase.turnOffNotification(token);
    successHandler.handleSuccess(200, 'turnOffNotification', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> turnOffNotification', error);
    next(new ErrorHandler(500, messageError));
  }
};
