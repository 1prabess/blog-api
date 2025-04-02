import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import usersRouter from "./routes/users/usersRoutes.js";
import postsRouter from "./routes/posts/postsRoutes.js";
import commentsRouter from "./routes/comments/commentsRoutes.js";
import categoriesRouter from "./routes/categories/categoriesRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies

// -------
// Routes
// -------
// users routes ----------------------------
app.use("/api/v1/users/", usersRouter);
app.use("/api/v1/posts/", postsRouter);
app.use("/api/v1/comments/", commentsRouter);
app.use("/api/v1/categories/", categoriesRouter);

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
