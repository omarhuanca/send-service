import Joi from '@hapi/joi';

export const mailSchema = Joi.object().keys({
  template: Joi.string().required().min(3),
  to: Joi.string().email().required(),
  subject: Joi.string().required(),
  data: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).required(),
});
