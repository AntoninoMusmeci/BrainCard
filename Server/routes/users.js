import express from "express";
import { User, validateUser } from "../models/user.js";
import bcrypt from "bcrypt";
import { auth } from "../middleware/auth.js";
import { asyncMiddleware } from "../middleware/async.js";
export const router = express.Router();
router.get(
  "/",
  auth,
  asyncMiddleware(async (req, res) => {
    const users = await User.find().sort("name").select("_id name email");
    res.send(users);
  })
);

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.send({ _id: user._id, name: user.name, email: user.email });
  })
);
