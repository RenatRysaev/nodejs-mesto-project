import { celebrate, Joi } from "celebrate";
import { Shared } from "../../shared";

export const createUserValidationSchema = celebrate({
  body: Joi.object<Shared.Types.IUser>().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(200),
    avatar: Joi.string().uri(),
  }),
});
