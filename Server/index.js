import express, { json } from "express";
import { router as decks } from "./routes/decks.js";
import { router as cards } from "./routes/cards.js";
import { router as users } from "./routes/users.js";
import { router as auth } from "./routes/auth.js";
import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
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
app.use(express.json());
app.use("/api/decks", decks);
app.use("/api/cards", cards);
app.use("/api/users", users);
app.use("/api/auth", auth)

const port = process.env.PORT | 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
