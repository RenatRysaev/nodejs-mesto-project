import mongoose from "mongoose";
import { Shared } from "../shared";

export const userSchema = new mongoose.Schema<Shared.Types.IUser>({
  name: { type: String, min: 2, max: 30, required: true },
  about: { type: String, min: 2, max: 200, required: true },
  avatar: { type: String, required: true },
});

export const UserModel = mongoose.model<Shared.Types.IUser>("user", userSchema);
