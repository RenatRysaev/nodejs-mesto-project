import { celebrate, Joi } from "celebrate";
import { Shared } from "../../shared";

export const createCardValidationSchema = celebrate({
  body: Joi.object<Shared.Types.ICard>().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required(),
    createdAt: Joi.date().required(),
  }),
});
