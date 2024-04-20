import { celebrate, Joi } from "celebrate";
import { Shared } from "../../shared";

export const updateProfileValidationSchema = celebrate({
  body: Joi.object<Shared.Types.IUser>().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(200),
  }),
});
