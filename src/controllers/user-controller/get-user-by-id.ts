import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const getUserById = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const user = await Models.UserModel.findById(req.params.userId);

    if (!user) {
      throw new Shared.Utils.Errors.NotFoundError(
        Shared.Constants.ERROR_MESSAGES.USER_DOES_NOT_EXIST,
      );
    }

    res.status(Shared.Constants.HTTP_STATUS_CODES.OK).json(user);
  } catch (error) {
    next(error);
  }
};
