import { celebrate, Joi } from "celebrate";
import { Shared } from "../../shared";

export const updateAvatarValidationSchema = celebrate({
  body: Joi.object<Shared.Types.IUser>().keys({
    avatar: Joi.string().required(),
  }),
});
