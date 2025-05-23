import { StatusCodes } from "http-status-codes";
import User from "../../models/userModel.js";

const uploadProfilePhotoProvider = async (req, res) => {
  try {
    const user = await User.findById(req.user.sub);

    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found" });
    }

    await User.findByIdAndUpdate(
      user._id,
      {
        $set: {
          profilePhoto: req.file.path,
        },
      },
      { new: true }
    );

    return res.status(StatusCodes.CREATED).json({
      message: "Profile photo uploaded successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};
export default uploadProfilePhotoProvider;
