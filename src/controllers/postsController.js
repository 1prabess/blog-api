import createPostProvider from "../providers/posts/createPostProvider.js";
import getAllPostsProvider from "../providers/posts/getAllPostsProvider.js";
import getPostProvider from "../providers/posts/getPostProvider.js";
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

export const handleGetAllPosts = async (req, res) => {
  await getAllPostsProvider(req, res);
};

export const deletePost = async (req, res) => {
  try {
    res.json({ status: "success", data: `Post ${req.params.id} deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    res.json({ status: "success", data: `Post ${req.params.id} updated` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
