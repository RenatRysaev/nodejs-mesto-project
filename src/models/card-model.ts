import mongoose from "mongoose";
import { Shared } from "../shared";

const cardSchema = new mongoose.Schema<Shared.Types.ICard>({
  name: { type: String, min: 2, max: 30, required: true },
  link: { type: String, required: true },
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
