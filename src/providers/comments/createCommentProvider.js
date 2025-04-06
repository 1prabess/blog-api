import { StatusCodes } from "http-status-codes";
import Comment from "../../models/commentModel.js";

const createCommentProvider = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user.sub;

  try {
    const comment = new Comment({
      post: postId,
      user: userId,
      content: req.body.content,
    });

    await comment.save();
    res.status(StatusCodes.CREATED).json(comment);
  } catch (error) {
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default createCommentProvider;
