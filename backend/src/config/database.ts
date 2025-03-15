import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env file
dotenv.config({ path: __dirname + "/../../.env" });

// Debug: Check if MONGO_URI is loaded
console.log("🔍 MONGO_URI:", process.env.MONGO_URI);

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env file!");
    }
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB Connected Locally");
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;

