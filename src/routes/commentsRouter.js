import express from "express";
import {
  deleteComment,
  updateComment,
  handleCreateComment,
  handleGetAllComments,
} from "../controllers/commentsController.js";
import authenticatetokenMiddleware from "../middlewares/authenticateTokenMiddleware.js";

const commentsRouter = express.Router();

commentsRouter.post(
  "/:postId",
  authenticatetokenMiddleware,
  handleCreateComment
);

commentsRouter.get("/:postId", handleGetAllComments);

commentsRouter.delete("/:id", deleteComment);

commentsRouter.put("/:id", updateComment);

export default commentsRouter;
