import { StatusCodes } from "http-status-codes";
import User from "../../models/userModel.js";

const getUserProfileProvider = async (req, res) => {
  try {
    const user = await User.findById(req.user.sub);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default getUserProfileProvider;
