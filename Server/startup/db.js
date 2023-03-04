import mongoose from "mongoose";
import * as dotenv from "dotenv";

export const startDB= function () {
  dotenv.config();
  const dbUri = process.env.DB_URI;
  mongoose
    .connect(dbUri)
    .then(() => {
      console.log("Connected to the database...");
    })
    .catch((error) => {
      console.log("could not connect to the database!", error);
    });
};
