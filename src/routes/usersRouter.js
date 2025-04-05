import express from "express";
import {
  handleRegisterUser,
  handleLoginUser,
  handleGetUserProfile,
  handleUploadProfilePhoto,
  handleFollowUser,
  handleUnfollowUser,
  handleGetUsers,
  handleDeleteProfile,
  handleUpdateProfile,
} from "../controllers/usersController.js";
import authenticatetokenMiddleware from "../middlewares/authenticateTokenMiddleware.js";
import multer from "multer";
import storage from "../config/cloudinary.js";

const usersRouter = express.Router();
const upload = multer({ storage });

usersRouter.post("/register", handleRegisterUser);

usersRouter.post("/login", handleLoginUser);

usersRouter.get("/", handleGetUsers);

usersRouter.post(
  "/following/:id/",
  authenticatetokenMiddleware,
  handleFollowUser
);

usersRouter.delete(
  "/following/:id/",
  authenticatetokenMiddleware,
  handleUnfollowUser
);

usersRouter.get("/profile", authenticatetokenMiddleware, handleGetUserProfile);

usersRouter.delete(
  "/profile",
  authenticatetokenMiddleware,
  handleDeleteProfile
);

usersRouter.put("/profile", authenticatetokenMiddleware, handleUpdateProfile);

usersRouter.post(
  "/profile-photo-upload",
  authenticatetokenMiddleware,
  upload.single("profile"),
  handleUploadProfilePhoto
);

export default usersRouter;
