import registerUserProvider from "../providers/users/registerUserProvider.js";
import loginUserProvider from "../providers/users/loginUserProvider.js";
import getUserProfileProvider from "../providers/users/getUserProfileProvider.js";
import uploadProfilePhotoProvider from "../providers/users/uploadProfilePhotoProvider.js";
import followUserProvider from "../providers/users/followUserProvider.js";
import unfollowUserProvider from "../providers/users/unfollowUserProvider.js";
import getUsersProvider from "../providers/users/getUsersProvider.js";
import deleteProfileProvider from "../providers/users/deleteProfileProvider.js";
import updateProfileProvider from "../providers/users/updateProfileProvider.js";

export const handleRegisterUser = async (req, res) => {
  await registerUserProvider(req, res);
};

export const handleLoginUser = async (req, res) => {
  await loginUserProvider(req, res);
};

export const handleGetUsers = async (req, res) => {
  await getUsersProvider(req, res);
};

export const handleGetUserProfile = async (req, res) => {
  await getUserProfileProvider(req, res);
};

export const handleUploadProfilePhoto = async (req, res) => {
  await uploadProfilePhotoProvider(req, res);
};

export const handleFollowUser = async (req, res) => {
  await followUserProvider(req, res);
};

export const handleUnfollowUser = async (req, res) => {
  await unfollowUserProvider(req, res);
};

export const handleDeleteProfile = async (req, res) => {
  await deleteProfileProvider(req, res);
};

export const handleUpdateProfile = async (req, res) => {
  await updateProfileProvider(req, res);
};
