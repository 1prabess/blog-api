import createCommentProvider from "../providers/comments/createCommentProvider.js";
import getAllCommentsProvider from "../providers/comments/getAllCommentsProvider.js";

export const handleCreateComment = async (req, res) => {
  createCommentProvider(req, res);
};

export const handleGetAllComments = async (req, res) => {
  getAllCommentsProvider(req, res);
};
export const deleteComment = async (req, res) => {
  try {
    res.json({ status: "success", data: `Comment ${req.params.id} deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const updateComment = async (req, res) => {
  try {
    res.json({ status: "success", data: `Comment ${req.params.id} updated` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
