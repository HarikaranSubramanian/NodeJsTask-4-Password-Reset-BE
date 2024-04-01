import mongoose from "mongoose";
import dotevn from "dotenv";

dotevn.config();

const mongoDBConnectionString = process.env.MONGODBCONNECTIONSTRING;
const connectDB = async () => {
  try {
    console.log("connection string", mongoDBConnectionString);
    const connection = await mongoose.connect(mongoDBConnectionString);
    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    console.log("Error", error);
  }
};

export default connectDB;
