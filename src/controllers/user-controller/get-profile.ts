import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const getProfile = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const userId = req.user._id;

    const user = await Models.UserModel.findById(userId);

    if (!user) {
      throw new Shared.Utils.Errors.NotFoundError(
        Shared.Constants.ERROR_MESSAGES.USER_DOES_NOT_EXIST,
      );
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};
