import { StatusCodes } from "http-status-codes";
import Post from "../../models/postModel.js";

const likePostProvider = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user.sub;
  try {
    const post = await Post.findOne({ _id: postId });

    if (post.likes.includes(userId))
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "You already liked this post" });

    post.likes.push(userId);

    await post.save();

    return res.status(StatusCodes.OK).json(post);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default likePostProvider;
