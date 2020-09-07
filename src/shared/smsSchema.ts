import Joi from '@hapi/joi';

export const smsSchema = Joi.object().keys({
  phoneNumber: Joi.string().required().min(10),
  content: Joi.string().required(),
});
