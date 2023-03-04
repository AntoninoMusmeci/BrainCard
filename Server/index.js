import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
import { handleRoute } from "./startup/routes.js";
dotenv.config();

const dbUri = process.env.DB_URI
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to the database...");
  })
  .catch((error) => {
    console.log("could not connect to the database!", error);
  });

const app = express();
handleRoute(app)

const port = process.env.PORT | 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
