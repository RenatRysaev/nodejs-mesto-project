import express from "express";
import { Controllers } from "../controllers";
import { ValidationSchemas } from "../validation-schemas";

export const userRouter = express.Router();

const { UserController } = Controllers;
const { UserValidationSchema } = ValidationSchemas;

userRouter.get("/users", UserController.getUsers);
userRouter.get(
  "/users/:userId",
  UserValidationSchema.getUserByIdValidationSchema,
  UserController.getUserById,
);
userRouter.post(
  "/users",
  UserValidationSchema.createUserValidationSchema,
  UserController.createUser,
);
userRouter.patch(
  "/users/me",
  UserValidationSchema.updateProfileValidationSchema,
  UserController.updateProfile,
);
userRouter.patch(
  "/users/me/avatar",
  UserValidationSchema.updateAvatarValidationSchema,
  UserController.updateAvatar,
);
