import registerUserProvider from "../providers/users/registerUserProvider.js";
import loginUserProvider from "../providers/users/loginUserProvider.js";
import getUserProfileProvider from "../providers/users/getUserProfileProvider.js";
import uploadProfilePhotoProvider from "../providers/users/uploadProfilePhotoProvider.js";

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

export const handleGetUserProfile = async (req, res) => {
  await getUserProfileProvider(req, res);
};

export const handleUploadProfilePhoto = async (req, res) => {
  await uploadProfilePhotoProvider(req, res);
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
