import User from "../../model/user/user.js";

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

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      profilePhoto,
      email,
      password,
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
    // Check if the user exist
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.json({
        message: "Incorrect credentials",
      });
    }

    // Check the password
    const isCorrectPassword = await User.findOne({ password });

    if (!isCorrectPassword) {
      return res.json({
        message: "Incorrect credentials",
      });
    }

    res.json({ status: "success", data: "User logged in" });
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
  try {
    res.json({
      status: "success",
      data: `Profile route for user ${req.params.id}`,
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
