import { StatusCodes } from "http-status-codes";
import User from "../../models/userModel.js";

const updateProfileProvider = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.findById(req.user.sub);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "User not found",
      });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;

    await user.save();

    return res.status(StatusCodes.OK).json({
      firstName,
      lastName,
      email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export default updateProfileProvider;
