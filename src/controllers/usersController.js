import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import registerUserProvider from "../providers/users/registerUserProvider.js";
import loginUserProvider from "../providers/users/loginUserProvider.js";

export const handleRegisterUser = async (req, res) => {
  await registerUserProvider(req, res);
};

export const handleLoginUser = async (req, res) => {
  await loginUserProvider(req, res);
};

export const getUsers = async (req, res) => {
  try {
    res.json({ status: "success", data: "Users route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.sub);
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    res.json({ status: "success", data: `User ${req.params.id} deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    res.json({ status: "success", data: `User ${req.params.id} updated` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
