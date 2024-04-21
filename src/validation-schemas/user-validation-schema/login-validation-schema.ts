import { celebrate, Joi } from "celebrate";
import { Shared } from "../../shared";

export const loginValidationSchema = celebrate({
  body: Joi.object<Shared.Types.IUser>().keys({
    email: Joi.string().email().required().email(),
    password: Joi.string().min(8).required(),
  }),
});
