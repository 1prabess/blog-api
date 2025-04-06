import express from "express";
import {
  deletePost,
  updatePost,
  handleCreatePost,
  handleUploadThumbnailPhoto,
  handleGetAllPosts,
  handleGetPost,
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
postsRouter.get("/", authenticateTokenMiddleware, handleGetAllPosts);

// Get all post of other user
postsRouter.get("/user/:userId", handleGetAllPosts);

// Get single post
postsRouter.get("/post/:postId", handleGetPost);

postsRouter.delete("/:id", deletePost);

postsRouter.put("/:id", updatePost);

postsRouter.post(
  "/:postId/thumbnail",
  authenticatetokenMiddleware,
  upload.single("thumbnail"),
  handleUploadThumbnailPhoto
);

export default postsRouter;
