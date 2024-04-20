import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const createUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { name, about, avatar } = req.body;

  try {
    const user = await Models.UserModel.create({
      name,
      about,
      avatar,
    });

    res.status(Shared.Constants.HTTP_STATUS_CODES.CREATED).json(user);
  } catch (error) {
    next(error);
  }
};
