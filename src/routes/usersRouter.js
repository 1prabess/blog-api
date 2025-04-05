import express from "express";
import {
  // loginUser,
  getUsers,
  getUserProfile,
  deleteUser,
  updateUser,
  handleRegisterUser,
  handleLoginUser,
} from "../controllers/usersController.js";
import authenticatetokenMiddleware from "../middlewares/authenticateTokenMiddleware.js";

const usersRouter = express.Router();

usersRouter.post("/register", handleRegisterUser);

usersRouter.post("/login", handleLoginUser);

usersRouter.get("/", getUsers);

usersRouter.get("/profile", authenticatetokenMiddleware, getUserProfile);

usersRouter.delete("/:id", deleteUser);

usersRouter.put("/:id", updateUser);

export default usersRouter;
