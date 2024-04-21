import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { Shared } from "../shared";

export const errorMiddleware = (
  err: Shared.Types.IError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (
    err instanceof mongoose.Error.ValidatorError ||
    err instanceof mongoose.Error.CastError
  ) {
    res
      .status(Shared.Constants.HTTP_STATUS_CODES.BAD_REQUEST)
      .send({ message: err.message });

    return;
  }

  if (err instanceof jwt.TokenExpiredError) {
    const unauthorizedError = new Shared.Utils.Errors.UnauthorizedError();

    res
      .status(unauthorizedError.status)
      .send({ message: unauthorizedError.message });

    return;
  }

  if (!err.status) {
    const internalServerError = new Shared.Utils.Errors.InternalServerError();

    res
      .status(internalServerError.status)
      .send({ message: internalServerError.message });

    return;
  }

  res.status(err.status).send({ message: err.message });
};
