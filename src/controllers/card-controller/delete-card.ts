import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const deleteCard = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const userId = req.user._id;

    const card = await Models.CardModel.findOne({
      _id: req.params.cardId,
    });

    if (!card) {
      throw new Shared.Utils.Errors.NotFoundError(
        Shared.Constants.ERROR_MESSAGES.CARD_DOES_NOT_EXIST,
      );
    }

    if (card.owner.toString() !== userId) {
      throw new Shared.Utils.Errors.ForbiddenError();
    }

    await Models.CardModel.deleteOne({
      _id: req.params.cardId,
    });

    res.json(card);
  } catch (error) {
    next(error);
  }
};
