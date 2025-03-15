import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../../.env" });

import express from "express";
import cors from "cors";
import connectDB from "./config/database";

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
