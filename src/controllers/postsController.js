import createPostProvider from "../providers/posts/createPostProvider.js";

export const handleCreatePost = async (req, res) => {
  await createPostProvider(req, res);
};

export const getPost = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: `Post details for ID: ${req.params.id}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    res.json({ status: "success", data: "All posts route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
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
