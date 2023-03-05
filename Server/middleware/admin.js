import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export function admin(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).send("Access denied.");
  next();
}
