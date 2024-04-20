import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const dislikeCard = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const card = await Models.CardModel.findOneAndUpdate(
      { _id: req.params.cardId },
      { $pull: { likes: req.user._id } },
      { new: true, runValidators: true },
    );

    if (!card) {
      throw new Shared.Utils.Errors.NotFoundError(
        Shared.Constants.ERROR_MESSAGES.CARD_DOES_NOT_EXIST,
      );
    }

    res.json(card);
  } catch (error) {
    next(error);
  }
};
