import { StatusCodes } from "http-status-codes";
import User from "../../models/userModel.js";
import bcrypt from "bcrypt";
import generateToken from "../../utils/generateToken.js";

const loginUserProvider = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Incorrect Credentials" });
    }

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Incorrect Credentials" });
    }

    const token = generateToken(user);

    return res.status(StatusCodes.OK).json({
      accessToken: token,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default loginUserProvider;
