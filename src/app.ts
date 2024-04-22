import express from "express";
import mongoose from "mongoose";
import celebrate from "celebrate";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import cookieParser from "cookie-parser";
import { Routes } from "./routes";
import { Middlewares } from "./middlewares";

const {
  PORT = 3000,
  DB_HOST = "mongodb://0.0.0.0:27017",
  DB_NAME = "mestodb",
} = process.env;

const DB_PATH = `${DB_HOST}/${DB_NAME}`;

async function main() {
  await mongoose.connect(DB_PATH);

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(helmet());

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
  });
  app.use(limiter);
  app.use(Middlewares.requestLoggerMiddleware);

  app.use(Routes.userRouter);
  app.use(Routes.cardRouter);

  app.use(Middlewares.notFoundMiddleware);
  app.use(Middlewares.errorLoggerMiddleware);
  app.use(celebrate.errors());
  app.use(Middlewares.errorMiddleware);

  app.listen(PORT, () => {
    console.info(`App listening on port ${PORT}`);
  });
}

main().catch((err) => console.log(err));
