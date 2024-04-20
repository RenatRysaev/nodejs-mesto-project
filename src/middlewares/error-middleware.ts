import express from "express";
import mongoose from "mongoose";
import { Shared } from "../shared";

export const errorMiddleware = (
  err: Shared.Types.IError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (err instanceof mongoose.Error.ValidatorError) {
    res
      .status(Shared.Constants.HTTP_STATUS_CODES.BAD_REQUEST)
      .send({ message: err.message });

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
