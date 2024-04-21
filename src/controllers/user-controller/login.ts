import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Models } from "../../models";
import { Shared } from "../../shared";

const { SECRET_KEY = "default-secret-key" } = process.env;

export const login = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const { email, password } = req.body;

    const user = await Models.UserModel.findOne({ email }).select("+password");

    if (!user) {
      throw new Shared.Utils.Errors.UnauthorizedError();
    }

    const isMatchedPasswords = await bcrypt.compare(password, user.password);

    if (!isMatchedPasswords) {
      throw new Shared.Utils.Errors.UnauthorizedError();
    }

    const jwtToken = jwt.sign({ _id: user._id }, SECRET_KEY, {
      expiresIn: "7d",
    });

    res
      .cookie("JWT", jwtToken, {
        httpOnly: true,
        sameSite: true,
        maxAge: 1000 * 60 * 24 * 7,
      })
      .end();
  } catch (error) {
    next(error);
  }
};
