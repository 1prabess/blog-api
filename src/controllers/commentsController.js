import createCommentProvider from "../providers/comments/createCommentProvider.js";
import deleteCommentProvider from "../providers/comments/deleteCommentProvider.js";
import getAllCommentsProvider from "../providers/comments/getAllCommentsProvider.js";
import updateCommentProvider from "../providers/comments/updateCommentProvider.js";

export const handleCreateComment = async (req, res) => {
  createCommentProvider(req, res);
};

export const handleGetAllComments = async (req, res) => {
  getAllCommentsProvider(req, res);
};

export const handleDeleteComment = async (req, res) => {
  deleteCommentProvider(req, res);
};

export const handleUpdateComment = async (req, res) => {
  updateCommentProvider(req, res);
};
