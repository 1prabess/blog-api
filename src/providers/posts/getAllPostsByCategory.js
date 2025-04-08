import { StatusCodes } from "http-status-codes";
import Post from "../../models/postModel.js";

const getAllPostsByCategoryProvider = async (req, res) => {
  const category = req.params.category;
  try {
    const posts = await Post.find({ category });
    return res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default getAllPostsByCategoryProvider;
