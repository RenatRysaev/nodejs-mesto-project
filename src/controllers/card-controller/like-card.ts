import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const likeCard = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const card = await Models.CardModel.findOneAndUpdate(
      {
        _id: req.params.cardId,
      },
      { $addToSet: { likes: req.user._id } },
      { new: true },
    );

    if (!card) {
      throw new Shared.Utils.Errors.NotFoundError(
        Shared.Constants.ERROR_MESSAGES.CARD_DOES_NOT_EXIST,
      );
    }

    res.status(Shared.Constants.HTTP_STATUS_CODES.OK).json(card);
  } catch (error) {
    next(error);
  }
};
