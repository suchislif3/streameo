import mongoose from "mongoose";
import { DB_CONNECTION_STRING } from "../constants";
import logger from "./logger";

export async function connectToDatabase() {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    logger.info("Connect to database");
  } catch (err) {
    logger.error(err, "Failed to connect to database. Goodbye");
    process.exit(1);
  }
}

export async function disconnectFromDatabase() {
  await mongoose.connection.close();

  logger.info("Disconnect from database");

  return;
}
