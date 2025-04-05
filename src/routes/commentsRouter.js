import express from "express";
import {
  createComment,
  getComment,
  deleteComment,
  updateComment,
} from "../controllers/commentsController.js";

const commentsRouter = express.Router();

commentsRouter.post("/", createComment);

commentsRouter.get("/:id", getComment);

commentsRouter.delete("/:id", deleteComment);

commentsRouter.put("/:id", updateComment);

export default commentsRouter;
