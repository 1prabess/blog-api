import { StatusCodes } from "http-status-codes";
import User from "../../models/userModel.js";

const unfollowUserProvider = async (req, res) => {
  const { id } = req.params;

  try {
    // Get the current user
    const user = await User.findById(req.user.sub);

    // Get the user who needs to be unfollowed
    const userToUnfollow = await User.findById(id);

    // Check if the user is not follwing the target user
    if (!user.following.includes(id))
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "You are already not following this user" });

    user.following.pull(id);
    userToUnfollow.followers.pull(req.user.sub);

    await user.save();
    await userToUnfollow.save();

    return res.status(StatusCodes.OK).json({
      message: "You have successfully unfollowed the user",
      following: user.following,
    });
  } catch (error) {
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default unfollowUserProvider;
