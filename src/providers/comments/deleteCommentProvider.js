import { StatusCodes } from "http-status-codes";
import Comment from "../../models/commentModel.js";

const deleteCommentProvider = async (req, res) => {
  const commentId = req.params.commentId;
  const userId = req.user.sub;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Comment not found" });
    }

    // Ensure the comment belongs to the user
    if (comment.user.toString() !== userId) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "You are not authorized to delete this comment" });
    }

    await comment.deleteOne();

    return res
      .status(StatusCodes.OK)
      .json({ message: "Comment deleted successfully" });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default deleteCommentProvider;
