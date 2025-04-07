import createPostProvider from "../providers/posts/createPostProvider.js";
import deletePostProvider from "../providers/posts/deletePostProvider.js";
import getAllPostsOfProfileProvider from "../providers/posts/getAllPostsOfProfileProvider.js";
import getAllPostsProvider from "../providers/posts/getAllPostsProvider.js";
import getPostProvider from "../providers/posts/getPostProvider.js";
import likePostProvider from "../providers/posts/likePostProvider.js";
import unlikePostProvider from "../providers/posts/unlikePostProvider.js";
import updatePostProvider from "../providers/posts/updatePostProvider.js";
import uploadThumbnailPhotoProvider from "../providers/posts/uploadThumbnailPhotoProvider.js";

export const handleCreatePost = async (req, res) => {
  await createPostProvider(req, res);
};

export const handleUploadThumbnailPhoto = async (req, res) => {
  await uploadThumbnailPhotoProvider(req, res);
};

export const handleGetPost = async (req, res) => {
  await getPostProvider(req, res);
};

export const handleGetAllPostsOfProfile = async (req, res) => {
  await getAllPostsOfProfileProvider(req, res);
};

export const handleGetAllPosts = async (req, res) => {
  await getAllPostsProvider(req, res);
};

export const handleLikePost = async (req, res) => {
  await likePostProvider(req, res);
};

export const handleUnlikePost = async (req, res) => {
  await unlikePostProvider(req, res);
};

export const handleDeletePost = async (req, res) => {
  await deletePostProvider(req, res);
};

export const handleUpdatePost = async (req, res) => {
  await updatePostProvider(req, res);
};
