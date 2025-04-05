import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
  getUserProfile,
  deleteUser,
  updateUser,
} from "../controllers/usersController.js";

const usersRouter = express.Router();

usersRouter.post("/register", registerUser);

usersRouter.post("/login", loginUser);

usersRouter.get("/", getUsers);

usersRouter.get("/profile/:id", getUserProfile);

usersRouter.delete("/:id", deleteUser);

usersRouter.put("/:id", updateUser);

export default usersRouter;
