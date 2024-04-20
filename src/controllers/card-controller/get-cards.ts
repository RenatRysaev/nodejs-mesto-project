import express from "express";
import { Models } from "../../models";

export const getCards = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const cards = await Models.CardModel.find();

    res.json(cards);
  } catch (error) {
    next(error);
  }
};
