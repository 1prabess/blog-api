import { StatusCodes } from "http-status-codes";
import Post from "../../models/postModel.js";

const getAllPostsProvider = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default getAllPostsProvider;
