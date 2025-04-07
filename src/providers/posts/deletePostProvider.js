import { StatusCodes } from "http-status-codes";
import Post from "../../models/postModel.js";

const deletePostProvider = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user.sub;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Post not found" });
    }

    // Ensure the post belongs to the user
    if (post.user.toString() !== userId) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "You are not authorized to delete this post" });
    }

    await post.deleteOne();

    return res
      .status(StatusCodes.OK)
      .json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Delete post error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default deletePostProvider;
