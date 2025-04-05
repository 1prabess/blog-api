import { StatusCodes } from "http-status-codes";
import User from "../../models/userModel.js";

const followUserProvider = async (req, res) => {
  const { id } = req.params;

  try {
    // Get the current user
    const user = await User.findById(req.user.sub);

    // Get the user who needs to be followed
    const userToFollow = await User.findById(id);

    // Check if the user is already following the target user
    if (user.following.includes(id))
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "You are already following this user" });

    user.following.push(id);
    userToFollow.followers.push(req.user.sub);

    await user.save();
    await userToFollow.save();

    return res.status(StatusCodes.OK).json({
      message: "You have successfully followed the user",
      following: user.following,
    });
  } catch (error) {
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default followUserProvider;
