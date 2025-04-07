import express from "express";
import {
  handleCreateComment,
  handleGetAllComments,
  handleDeleteComment,
  handleUpdateComment,
} from "../controllers/commentsController.js";
import authenticatetokenMiddleware from "../middlewares/authenticateTokenMiddleware.js";

const commentsRouter = express.Router();

commentsRouter.post(
  "/:postId",
  authenticatetokenMiddleware,
  handleCreateComment
);

commentsRouter.get("/:postId", handleGetAllComments);

commentsRouter.delete(
  "/:commentId",
  authenticatetokenMiddleware,
  handleDeleteComment
);

commentsRouter.put(
  "/:commentId",
  authenticatetokenMiddleware,
  handleUpdateComment
);

export default commentsRouter;
