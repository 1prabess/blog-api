import { StatusCodes } from "http-status-codes";
import User from "../../models/userModel.js";
import bcrypt from "bcrypt";

const registerUserProvider = async (req, res) => {
  const { firstName, lastName, profilePhoto, email, password } = req.body;

  try {
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "A user with the same email already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      firstName,
      lastName,
      profilePhoto,
      email,
      password: hashedPassword,
    });

    await user.save();

    return res.status(StatusCodes.CREATED).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePhoto: user.profilePhoto,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default registerUserProvider;
