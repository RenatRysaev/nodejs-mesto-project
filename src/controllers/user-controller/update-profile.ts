import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const updateProfile = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const userId = req.user._id;

  try {
    const user = await Models.UserModel.findOneAndUpdate(
      { _id: userId },
      {
        name: req.body.name,
        about: req.body.about,
      },
      { new: true, runValidators: true },
    );

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
