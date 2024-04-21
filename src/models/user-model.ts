import mongoose from "mongoose";
import validator from "validator";
import { Shared } from "../shared";

export const userSchema = new mongoose.Schema<Shared.Types.IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email: string) {
        return validator.isEmail(email);
      },
      message: "Некорректный email",
    },
  },
  password: { type: String, required: true, select: false },
  name: { type: String, min: 2, max: 30, default: "Жак-Ив Кусто" },
  about: { type: String, min: 2, max: 200, default: "Исследователь" },
  avatar: {
    type: String,
    default:
      "https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png",
  },
});

export const UserModel = mongoose.model<Shared.Types.IUser>("user", userSchema);
