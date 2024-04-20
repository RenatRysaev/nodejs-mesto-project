import express from "express";
import mongoose from "mongoose";
import celebrate from "celebrate";
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

  app.use(Middlewares.authMiddleware);

  app.use(Routes.userRouter);
  app.use(Routes.cardRouter);

  app.use(celebrate.errors());
  app.use(Middlewares.errorMiddleware);

  app.listen(PORT, () => {
    console.info(`App listening on port ${PORT}`);
  });
}

main().catch((err) => console.log(err));
