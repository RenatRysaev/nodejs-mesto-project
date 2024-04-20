import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const getCards = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const cards = await Models.CardModel.find();

    res.status(Shared.Constants.HTTP_STATUS_CODES.OK).json(cards);
  } catch (error) {
    next(error);
  }
};
