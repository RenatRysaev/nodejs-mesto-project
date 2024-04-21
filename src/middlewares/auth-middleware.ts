import express from "express";
import jwt from "jsonwebtoken";
import { Shared } from "../shared";

const { SECRET_KEY = "default-secret-key" } = process.env;

export const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const { JWT } = req.cookies;

    if (!JWT) {
      throw new Shared.Utils.Errors.UnauthorizedError();
    }

    const payload = jwt.verify(JWT, SECRET_KEY);

    req.user = payload;

    next();
  } catch (error) {
    next(error);
  }
};
