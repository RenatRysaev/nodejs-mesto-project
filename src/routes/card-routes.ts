import express from "express";
import { Controllers } from "../controllers";
import { ValidationSchemas } from "../validation-schemas";
import { Middlewares } from "../middlewares";

export const cardRouter = express.Router();

const { CardController } = Controllers;
const { CardValidationSchema } = ValidationSchemas;

cardRouter.get("/cards", Middlewares.authMiddleware, CardController.getCards);
cardRouter.post(
  "/cards",
  CardValidationSchema.createCardValidationSchema,
  Middlewares.authMiddleware,
  CardController.createCard,
);
cardRouter.delete(
  "/cards/:cardId",
  CardValidationSchema.deleteCardValidationSchema,
  Middlewares.authMiddleware,
  CardController.deleteCard,
);
cardRouter.put(
  "/cards/:cardId/likes",
  CardValidationSchema.likeCardValidationSchema,
  Middlewares.authMiddleware,
  CardController.likeCard,
);
cardRouter.delete(
  "/cards/:cardId/likes",
  CardValidationSchema.dislikeCardValidationSchema,
  Middlewares.authMiddleware,
  CardController.dislikeCard,
);
