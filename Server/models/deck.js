import Joi from "joi";
import mongoose from "mongoose";

export const Deck = mongoose.model(
  "Deck",
  mongoose.Schema({
    name: { type: String, required: true, minlenght: 1, maxlenght: 256 },
    description: { type: String },
  })
);

export function validateDeck(deck) {
  const schema = Joi.object({
    name: Joi.string().max(256).required(),
    description: Joi.string().max(256).allow(""),
  });

  return schema.validate(deck);
}
