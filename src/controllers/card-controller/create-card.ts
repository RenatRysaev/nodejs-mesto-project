import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const createCard = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { name, link } = req.body;
  const userId = req.user._id;

  try {
    const card = await Models.CardModel.create({
      name,
      link,
      owner: userId,
      likes: [],
      createdAt: new Date(),
    });

    res.status(Shared.Constants.HTTP_STATUS_CODES.CREATED).json(card);
  } catch (error) {
    next(error);
  }
};
