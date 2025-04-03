import express from "express";
import {
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} from "../../controllers/categories/categoriesController.js";

const categoriesRouter = express.Router();

categoriesRouter.post("/", createCategory);

categoriesRouter.get("/:id", getCategory);

categoriesRouter.delete("/:id", deleteCategory);

categoriesRouter.put("/:id", updateCategory);

export default categoriesRouter;
