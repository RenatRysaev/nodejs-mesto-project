import express from "express";
import { Shared } from "../shared";

export const notFoundMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const notFoundError = new Shared.Utils.Errors.NotFoundError(
    Shared.Constants.ERROR_MESSAGES.NOT_FOUND,
  );

  return next(notFoundError);
};
