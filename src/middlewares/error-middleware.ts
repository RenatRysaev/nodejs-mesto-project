import express from "express";
import { Shared } from "../shared";

export const errorMiddleware = (
  err: Shared.Types.IError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (err.name === "ValidationError" || err.name === "CastError") {
    res
      .status(Shared.Constants.HTTP_STATUS_CODES.BAD_REQUEST)
      .send({ message: err.message });

    return;
  }

  const isConflictError = err.code === 11000;

  if (isConflictError) {
    const conflictError = new Shared.Utils.Errors.ConflictError();

    res.status(conflictError.status).send({ message: conflictError.message });

    return;
  }

  if (err.name === "TokenExpiredError") {
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
