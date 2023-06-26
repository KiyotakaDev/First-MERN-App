import { connect } from "mongoose";
import { config as dotenv } from "dotenv";

dotenv();

const DB_CONNECTION = process.env.MONGO_CONNECTION;

export const connectDB = async () => {
  try {
    await connect(DB_CONNECTION);
    console.log(">> DB is connected:");
  } catch (error) {
    console.error(error);
  }
};
