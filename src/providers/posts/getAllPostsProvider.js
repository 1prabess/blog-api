import { StatusCodes } from "http-status-codes";
import Post from "../../models/postModel.js";

const getAllPostsProvider = async (req, res) => {
  const userId = req.params.userId || req.user.sub;
  try {
    const posts = await Post.find({ user: userId });
    return res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default getAllPostsProvider;
