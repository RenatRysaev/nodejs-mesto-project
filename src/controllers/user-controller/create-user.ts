import express from "express";
import bcrypt from "bcryptjs";
import { Models } from "../../models";
import { Shared } from "../../shared";

export const createUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const { name, about, avatar, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Models.UserModel.create({
      email,
      password: hashedPassword,
      name,
      about,
      avatar,
    });

    res.status(Shared.Constants.HTTP_STATUS_CODES.CREATED).json(user);
  } catch (error) {
    next(error);
  }
};
