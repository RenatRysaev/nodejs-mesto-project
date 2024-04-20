import express from "express";

export const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  req.user = {
    _id: "66202beb161008a5653f473d",
  };

  next();
};
