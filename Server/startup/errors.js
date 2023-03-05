import { error } from "../middleware/error.js";

export const handleErrors = function (app) {
  app.use(error);
  process.on("uncaughtException", (ex) => {
    console.log("ERROR!");
  });
  process.on("unhandledRejection", (ex) => {
    console.log("ERROR!");
  });
};
