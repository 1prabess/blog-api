import express from "express";

const postsRouter = express.Router();

postsRouter.post("/", async (req, res) => {
  try {
    res.json({ status: "success", data: "post created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

postsRouter.get("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "post route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

postsRouter.get("/", async (req, res) => {
  try {
    res.json({ status: "success", data: "all posts route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

postsRouter.delete("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "delete post route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

postsRouter.put("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "update post route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

export default postsRouter;
