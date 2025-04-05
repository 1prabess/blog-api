import express from "express";
import {
  getPost,
  getAllPosts,
  deletePost,
  updatePost,
  handleCreatePost,
} from "../controllers/postsController.js";
import authenticateTokenMiddleware from "../middlewares/authenticateTokenMiddleware.js";

const postsRouter = express.Router();

postsRouter.post("/", authenticateTokenMiddleware, handleCreatePost);

postsRouter.get("/:id", getPost);

postsRouter.get("/", getAllPosts);

postsRouter.delete("/:id", deletePost);

postsRouter.put("/:id", updatePost);

export default postsRouter;
