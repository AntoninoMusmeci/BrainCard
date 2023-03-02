import Joi from "joi";
import mongoose from "mongoose";
// import { cardScheema } from "./card.js";
export const Deck = mongoose.model(
  "Deck",
  mongoose.Schema({
    name: { type: String, required: true, minlenght: 1, maxlenght: 256 },
    description: { type: String },
    cards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
      },
    ],
  })
);

export function validateDeck(deck) {
  const schema = Joi.object({
    name: Joi.string().max(256).required(),
    description: Joi.string().max(256).allow(""),
  });

  return schema.validate(deck);
}
