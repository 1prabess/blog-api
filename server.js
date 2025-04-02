import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";

dotenv.config();

const app = express();

// Middlewares
// Routes
// Error handling middlewares
// Listen to server
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
