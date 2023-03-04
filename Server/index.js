import express from "express";
import { handleRoutes } from "./startup/routes.js";
import { startDB } from "./startup/db.js";

const app = express();
handleRoutes(app);
startDB();

const port = process.env.PORT | 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
