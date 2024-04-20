import { celebrate, Joi } from "celebrate";

export const dislikeCardValidationSchema = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24).required(),
  }),
});
