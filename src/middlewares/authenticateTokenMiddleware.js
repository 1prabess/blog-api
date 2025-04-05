import { StatusCodes } from "http-status-codes";
import getToken from "../utils/getToken.js";
import jwt from "jsonwebtoken";

const authenticatetokenMiddleware = (req, res, next) => {
  const token = getToken(req);

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "No token found" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "Please login again, invalid token" });
    }

    req.user = payload;
    next();
  });
};

export default authenticatetokenMiddleware;
