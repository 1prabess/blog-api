import { StatusCodes } from "http-status-codes";
import Post from "../../models/postModel.js";

const updatePostProvider = async (req, res) => {
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
        .json({ message: "You are not authorized to update this post" });
    }

    post.content = req.body.content;

    await post.save();

    return res
      .status(StatusCodes.OK)
      .json({ message: "Post updated successfully", post });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default updatePostProvider;
