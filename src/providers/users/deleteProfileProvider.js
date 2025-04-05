import { StatusCodes } from "http-status-codes";
import User from "../../models/userModel.js";

const deleteProfileProvider = async (req, res) => {
  try {
    const userToDelete = await User.findById(req.user.sub);

    if (!userToDelete) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "User not found",
      });
    }

    await User.updateMany(
      { following: userToDelete._id },
      {
        $pull: {
          following: userToDelete._id,
        },
      }
    );

    await User.updateMany(
      { followers: userToDelete._id },
      {
        $pull: {
          followers: userToDelete._id,
        },
      }
    );

    await User.findByIdAndDelete(userToDelete._id);

    return res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default deleteProfileProvider;
