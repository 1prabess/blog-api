import { StatusCodes } from "http-status-codes";
import User from "../../models/userModel.js";

const getUsersProvider = async (req, res) => {
  try {
    const users = await User.find().select(
      "firstName lastName fullName initials profilePhoto followers following posts createdAt updatedAt"
    );
    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default getUsersProvider;
