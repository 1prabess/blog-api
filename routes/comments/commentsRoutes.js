import express from "express";

const commentsRouter = express.Router();

commentsRouter.post("/", async (req, res) => {
  try {
    res.json({ status: "success", data: "comment created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

commentsRouter.get("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "comment route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

commentsRouter.delete("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "delete comment route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

commentsRouter.put("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "update comment route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

export default commentsRouter;
