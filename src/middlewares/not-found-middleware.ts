import express from "express";
import { Shared } from "../shared";

export const notFoundMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const notFoundError = new Shared.Utils.Errors.NotFoundError(
    "Несуществующий адрес",
  );

  res.status(notFoundError.status).json({ message: notFoundError.message });
};
