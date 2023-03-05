import Joi from "joi";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlenght: 1, maxlenght: 256 },
  email: {
    type: String,
    required: true,
    unique: true,
    minlenght: 1,
    maxlenght: 256,
  },
  password: { type: String, required: true, maxlenght: 1024 },

  isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_KEY
  );
};

export const User = mongoose.model("User", mongoose.Schema(userSchema));

export function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().max(256).required(),
    email: Joi.string().max(256).required().email(),
    password: Joi.string().max(256).required(),
  });

  return schema.validate(user);
}
