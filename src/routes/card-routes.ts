import express from "express";
import { Controllers } from "../controllers";
import { ValidationSchemas } from "../validation-schemas";

export const cardRouter = express.Router();

const { CardController } = Controllers;
const { CardValidationSchema } = ValidationSchemas;

cardRouter.get("/cards", CardController.getCards);
cardRouter.post(
  "/cards",
  CardValidationSchema.createCardValidationSchema,
  CardController.createCard,
);
cardRouter.delete(
  "/cards/:cardId",
  CardValidationSchema.deleteCardValidationSchema,
  CardController.deleteCard,
);
cardRouter.put(
  "/cards/:cardId/likes",
  CardValidationSchema.likeCardValidationSchema,
  CardController.likeCard,
);
cardRouter.delete(
  "/cards/:cardId/likes",
  CardValidationSchema.dislikeCardValidationSchema,
  CardController.dislikeCard,
);
