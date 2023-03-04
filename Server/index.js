import express from "express";
import { handleRoutes } from "./startup/routes.js";
import { startDB } from "./startup/db.js";
import { handleErrors } from "./middleware/error.js";
const app = express();
handleRoutes(app);

app.use(handleErrors)
process.on('uncaughtException', (ex) => {
  console.log("ERROR!")
})
process.on('unhandledRejection', (ex) => {
  console.log("ERROR!")
})

startDB();
const port = process.env.PORT | 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
