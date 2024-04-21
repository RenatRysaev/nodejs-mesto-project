import mongoose from "mongoose";
import validator from "validator";
import { Shared } from "../shared";

const cardSchema = new mongoose.Schema<Shared.Types.ICard>({
  name: { type: String, min: 2, max: 30, required: true },
  link: {
    type: String,
    required: true,
    validate: {
      validator(url: string) {
        return validator.isURL(url);
      },
      message: "Некорректная ссылка",
    },
  },
  owner: { type: mongoose.Schema.ObjectId, ref: "user", required: true },
  likes: {
    type: [mongoose.Schema.ObjectId],
    ref: "user",
    required: true,
    default: [],
  },
  createdAt: { type: Date, required: true, default: Date.now },
});

export const CardModel = mongoose.model<Shared.Types.ICard>("card", cardSchema);
