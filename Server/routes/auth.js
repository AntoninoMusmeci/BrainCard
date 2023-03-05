import express from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import { asyncMiddleware } from "../middleware/async.js";
import { User } from "../models/user.js";
import { auth } from "../middleware/auth.js";
export const router = express.Router();

if (!process.env.JWT_KEY) {
  console.error("FATAL ERROR: JWTkey is not defined");
  process.exit(1);
}

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send("Invalid Email or Password");
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isValidPassword)
      return res.status(400).send("Invalid Email or Password");
    const token = user.generateAuthToken();
    res.send(token);
  })
);

router.get(
  "/me",
  [auth],
  asyncMiddleware(async (req, res) => {
    const user = await User.findById(req.user._id).select("-password -__v");
    if (!user) return res.status(404).send("Not found");
    res.send(user);
  })
);

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().max(255).required().email(),
    password: Joi.string().max(255).required(),
  });
  return schema.validate(req);
}
