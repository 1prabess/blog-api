import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies

// -------
// Routes
// -------
// users routes ----------------------------
// POST /api/v1/users/register
app.post("/api/v1/users/register", async (req, res) => {
  try {
    res.json({ status: "success", data: "user registered" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// POST /api/v1/users/login
app.post("/api/v1/users/login", async (req, res) => {
  try {
    res.json({ status: "success", data: "user logged in" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// GET /api/v1/users/profile/:id
app.get("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "profile route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// GET /api/v1/users
app.get("/api/v1/users", async (req, res) => {
  try {
    res.json({ status: "success", data: "users route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// DELETE /api/v1/users/:id
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "delete user route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// PUT /api/v1/users/:id
app.put("/api/v1/users/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "update user route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// posts routes ----------------------------
// POST /api/v1/posts
app.post("/api/v1/posts", async (req, res) => {
  try {
    res.json({ status: "success", data: "post created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// GET /api/v1/posts/:id
app.get("/api/v1/posts/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "post route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// GET /api/v1/posts
app.get("/api/v1/posts", async (req, res) => {
  try {
    res.json({ status: "success", data: "posts route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// DELETE /api/v1/posts/:id
app.delete("/api/v1/posts/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "delete post route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// PUT /api/v1/posts/:id
app.put("/api/v1/posts/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "update post route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// comments routes ----------------------------
// POST /api/v1/comments
app.post("/api/v1/comments", async (req, res) => {
  try {
    res.json({ status: "success", data: "comment created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// GET /api/v1/comments/:id
app.get("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "comment route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// DELETE /api/v1/comments/:id
app.delete("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "delete comment route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// PUT /api/v1/comments/:id
app.put("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "update comment route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// categories routes ----------------------------
// POST /api/v1/categories
app.post("/api/v1/categories", async (req, res) => {
  try {
    res.json({ status: "success", data: "category created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// GET /api/v1/categories/:id
app.get("/api/v1/categories/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "category route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// DELETE /api/v1/categories/:id
app.delete("/api/v1/categories/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "delete category route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// PUT /api/v1/categories/:id
app.put("/api/v1/categories/:id", async (req, res) => {
  try {
    res.json({ status: "success", data: "update category route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: "error", message: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 9000;

const bootstrap = async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
    process.exit(1);
  }
};

bootstrap();
