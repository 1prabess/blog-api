import express from "express";

const categoriesRouter = express.Router();

categoriesRouter.post("/", async (req, res) => {
  try {
    res.json({ status: "success", data: "category created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

categoriesRouter.get("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "category route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

categoriesRouter.delete("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "delete category route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

categoriesRouter.put("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "update category route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

export default categoriesRouter;
