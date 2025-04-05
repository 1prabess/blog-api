import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import usersRouter from "./routes/usersRouter.js";
import postsRouter from "./routes/postsRouter.js";
import commentsRouter from "./routes/commentsRouter.js";
import categoriesRouter from "./routes/categoriesRouter.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies

// Routes
app.use("/api/v1/users/", usersRouter);
app.use("/api/v1/posts/", postsRouter);
app.use("/api/v1/comments/", commentsRouter);
app.use("/api/v1/categories/", categoriesRouter);

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
