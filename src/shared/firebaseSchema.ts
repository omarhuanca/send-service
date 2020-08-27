import Joi from '@hapi/joi';

export const sendTopicSchema = Joi.object().keys({
  topic: Joi.string().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
});

export const sendSomeOneSchema = Joi.object().keys({
  token: Joi.string().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
});

export const sendArraySchema = Joi.object().keys({
  tokens: Joi.array().items(Joi.string()).required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
});

export const sendAllSchema = Joi.object().keys({
  title: Joi.string().required(),
  body: Joi.string().required(),
});

export const subscribeSchema = Joi.object().keys({
  token: Joi.string().required(),
  topic: Joi.string().required(),
});

export const notificationSchema = Joi.object().keys({
  token: Joi.string().required(),
});
