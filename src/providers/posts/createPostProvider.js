import { StatusCodes } from "http-status-codes";
import Post from "../../models/postModel.js";
import User from "../../models/userModel.js";

const createPostProvider = async (req, res) => {
  const { title, content } = req.body;
  try {
    const user = await User.findById(req.user.sub);

    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "User not found or unauthorized",
      });
    }

    const post = new Post({
      title,
      content,
      user: user._id,
    });

    user.posts.push(post._id);

    await post.save();
    await user.save();

    return res.status(StatusCodes.CREATED).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export default createPostProvider;
