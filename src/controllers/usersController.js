import bcrypt from "bcrypt";
import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const { firstName, lastName, profilePhoto, email, password } = req.body;

  try {
    // Check if there is an existing email
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.json({
        message: "Email already exists.",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      profilePhoto,
      email,
      password: hashedPassword,
    });

    res.json({ status: "success", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Fetch the user
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: "Incorrect credentials",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        message: "Incorrect credentials",
      });
    }

    res.json({ status: "success", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
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
  const { id } = req.params;
  try {
    const user = await User.findById(id);
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
