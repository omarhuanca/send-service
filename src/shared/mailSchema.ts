import Joi from '@hapi/joi';

export const mailSchema = Joi.object().keys({
  template: Joi.string().required().min(3),
  to: Joi.string().email().required(),
  subject: Joi.string().required(),
  data: Joi.object({
    title: Joi.string().required().min(3),
    name: Joi.string().required().min(3),
    description: Joi.string(),
    content: Joi.string().required().min(3),
  }),
});
