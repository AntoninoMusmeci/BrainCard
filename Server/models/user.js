import Joi from "joi";
import mongoose from "mongoose";

export const User = mongoose.model(
  "User",
  mongoose.Schema({
    name: { type: String, required: true, minlenght: 1, maxlenght: 256 },
    email: {
      type: String,
      required: true,
      unique: true,
      minlenght: 1,
      maxlenght: 256,
    },
    password: { type: String, required: true, maxlenght: 1024 },
  })
);

export function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().max(256).required(),
    email: Joi.string().max(256).required().email(),
    password: Joi.string().max(256).required(),
  });

  return schema.validate(user);
}
