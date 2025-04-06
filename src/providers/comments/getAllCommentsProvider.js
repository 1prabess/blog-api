import { StatusCodes } from "http-status-codes";
import Comment from "../../models/commentModel.js";

const getAllCommentsProvider = async (req, res) => {
  const postId = req.params.postId;

  try {
    const comments = await Comment.find({ post: postId });

    if (!comments || comments.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "No comments found for this post.",
      });
    }

    return res.status(StatusCodes.OK).json(comments);
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default getAllCommentsProvider;
