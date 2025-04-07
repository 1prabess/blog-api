import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import usersRouter from "./routes/usersRouter.js";
import postsRouter from "./routes/postsRouter.js";
import commentsRouter from "./routes/commentsRouter.js";
import responseFormatter from "./middlewares/responseFormatter.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());
app.use(responseFormatter);

// Routes
app.use("/api/v1/users/", usersRouter);
app.use("/api/v1/posts/", postsRouter);
app.use("/api/v1/comments/", commentsRouter);

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
