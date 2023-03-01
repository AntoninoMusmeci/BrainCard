import express, { json } from "express";
import { router as decks } from "./routes/decks.js";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/memflix")
  .then(() => {
    console.log("Connected to the database...");
  })
  .catch((error) => {
    console.log("could not connect to the database!", error);
  });

const app = express();
app.use(express.json());
app.use("/api/decks", decks);

const port = process.env.PORT | 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
