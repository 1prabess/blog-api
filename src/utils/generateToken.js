import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const payload = {
    sub: user._id,
    email: user.email,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(
      Date.now() / 1000 + parseInt(process.env.JWT_ACCESS_EXPIRATION)
    ),
  };

  return jwt.sign(payload, process.env.JWT_SECRET_KEY);
};

export default generateToken;
