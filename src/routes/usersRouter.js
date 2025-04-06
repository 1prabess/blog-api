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

// Register new user
usersRouter.post("/register", handleRegisterUser);

// Login user
usersRouter.post("/login", handleLoginUser);

// Get all users
usersRouter.get("/", handleGetUsers);

// Follow user
usersRouter.post(
  "/following/:id/",
  authenticatetokenMiddleware,
  handleFollowUser
);

// Unfollow user
usersRouter.delete(
  "/following/:id/",
  authenticatetokenMiddleware,
  handleUnfollowUser
);

// Get your profile
usersRouter.get("/profile", authenticatetokenMiddleware, handleGetUserProfile);

// Delete your profile
usersRouter.delete(
  "/profile",
  authenticatetokenMiddleware,
  handleDeleteProfile
);

// Get profile of other user
usersRouter.get("/profile/:userId", handleGetUserProfile);

// Update your profile
usersRouter.put("/profile", authenticatetokenMiddleware, handleUpdateProfile);

// Upload user profile photo
usersRouter.post(
  "/profilePhoto",
  authenticatetokenMiddleware,
  upload.single("profile"),
  handleUploadProfilePhoto
);

export default usersRouter;
