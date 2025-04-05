import express from "express";
import {
  createPost,
  getPost,
  getAllPosts,
  deletePost,
  updatePost,
} from "../controllers/postsController.js";

const postsRouter = express.Router();

postsRouter.post("/", createPost);

postsRouter.get("/:id", getPost);

postsRouter.get("/", getAllPosts);

postsRouter.delete("/:id", deletePost);

postsRouter.put("/:id", updatePost);

export default postsRouter;
