import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const connec = await mongoose.connnect(process.env.MONGO_URL);
    console.log(`Database connected successfully ${connec.connection.host}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
