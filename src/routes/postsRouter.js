import express from "express";
import {
  handleCreatePost,
  handleUploadThumbnailPhoto,
  handleGetPost,
  handleLikePost,
  handleUnlikePost,
  handleGetAllPostsOfProfile,
  handleGetAllPosts,
  handleDeletePost,
  handleUpdatePost,
} from "../controllers/postsController.js";
import authenticateTokenMiddleware from "../middlewares/authenticateTokenMiddleware.js";
import authenticatetokenMiddleware from "../middlewares/authenticateTokenMiddleware.js";
import storage from "../config/cloudinary.js";
import multer from "multer";
const upload = multer({ storage });

const postsRouter = express.Router();

// Create post
postsRouter.post("/", authenticateTokenMiddleware, handleCreatePost);

// Get your all posts
postsRouter.get("/", authenticateTokenMiddleware, handleGetAllPostsOfProfile);

// Get all post of other user
postsRouter.get("/user/:userId", handleGetAllPostsOfProfile);

// Get all posts for feed
postsRouter.get("/feed", authenticateTokenMiddleware, handleGetAllPosts);

// Get single post
postsRouter.get("/post/:postId", handleGetPost);

// Like a post
postsRouter.post("/:postId/like", authenticateTokenMiddleware, handleLikePost);

// Unlike a post
postsRouter.post(
  "/:postId/unlike",
  authenticateTokenMiddleware,
  handleUnlikePost
);

postsRouter.delete("/:postId", authenticateTokenMiddleware, handleDeletePost);

postsRouter.put("/:postId", authenticateTokenMiddleware, handleUpdatePost);

postsRouter.post(
  "/:postId/thumbnail",
  authenticatetokenMiddleware,
  upload.single("thumbnail"),
  handleUploadThumbnailPhoto
);

export default postsRouter;
