import express from "express";

const usersRouter = express.Router();

usersRouter.post("/register", async (req, res) => {
  try {
    res.json({ status: "success", data: "user registered" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

usersRouter.post("/login", async (req, res) => {
  try {
    res.json({ status: "success", data: "user logged in" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

usersRouter.get("/", async (req, res) => {
  try {
    res.json({ status: "success", data: "users route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

usersRouter.get("/profile/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "profile route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

usersRouter.delete("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "delete user route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

usersRouter.put("/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "update user route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

export default usersRouter;
