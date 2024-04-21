import express from "express";
import { Controllers } from "../controllers";
import { ValidationSchemas } from "../validation-schemas";
import { Middlewares } from "../middlewares";

export const userRouter = express.Router();

const { UserController } = Controllers;
const { UserValidationSchema } = ValidationSchemas;

userRouter.post(
  "/signin",
  UserValidationSchema.loginValidationSchema,
  UserController.login,
);

userRouter.post(
  "/signup",
  UserValidationSchema.createUserValidationSchema,
  UserController.createUser,
);

userRouter.get("/users", Middlewares.authMiddleware, UserController.getUsers);

userRouter.get(
  "/users/me",
  Middlewares.authMiddleware,
  UserController.getProfile,
);

userRouter.patch(
  "/users/me",
  UserValidationSchema.updateProfileValidationSchema,
  Middlewares.authMiddleware,
  UserController.updateProfile,
);

userRouter.patch(
  "/users/me/avatar",
  UserValidationSchema.updateAvatarValidationSchema,
  Middlewares.authMiddleware,
  UserController.updateAvatar,
);
