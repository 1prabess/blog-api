import express from "express";
import {
  getUsers,
  deleteUser,
  updateUser,
  handleRegisterUser,
  handleLoginUser,
  handleGetUserProfile,
  handleUploadProfilePhoto,
} from "../controllers/usersController.js";
import authenticatetokenMiddleware from "../middlewares/authenticateTokenMiddleware.js";
import multer from "multer";
import storage from "../config/cloudinary.js";

const usersRouter = express.Router();
const upload = multer({ storage });

usersRouter.post("/register", handleRegisterUser);
usersRouter.post("/login", handleLoginUser);
usersRouter.get("/", getUsers);
usersRouter.get("/profile", authenticatetokenMiddleware, handleGetUserProfile);
usersRouter.delete("/:id", deleteUser);
usersRouter.put("/:id", updateUser);

usersRouter.post(
  "/profile-photo-upload",
  authenticatetokenMiddleware,
  upload.single("profile"),
  handleUploadProfilePhoto
);

export default usersRouter;
