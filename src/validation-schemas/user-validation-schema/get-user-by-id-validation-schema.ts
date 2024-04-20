import { celebrate, Joi } from "celebrate";

export const getUserByIdValidationSchema = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24).required(),
  }),
});
