import express from "express";
import { Models } from "../../models";

export const getUsers = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const users = await Models.UserModel.find();

    res.json(users);
  } catch (error) {
    next(error);
  }
};
