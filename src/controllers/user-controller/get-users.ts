import express from "express";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const getUsers = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const users = await Models.UserModel.find();

    res.status(Shared.Constants.HTTP_STATUS_CODES.OK).json(users);
  } catch (error) {
    next(error);
  }
};
