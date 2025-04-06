import { StatusCodes } from "http-status-codes";
import Post from "../../models/postModel.js";

const getPostProvider = async (req, res) => {
  const postId = req.params.postId;
  try {
    const posts = await Post.findOne({ _id: postId });

    return res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default getPostProvider;
