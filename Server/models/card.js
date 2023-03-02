import Joi from "joi";
import mongoose from "mongoose";

import JoiObjectId from "joi-objectid";
Joi.objectId = JoiObjectId(Joi);

export const cardScheema = mongoose.Schema({
  question: { type: String, required: true, minlenght: 1, maxlenght: 256 },
  answer: { type: String },
  difficulty: { type: String },
});

export const Card = mongoose.model("Card", cardScheema);



export function validateCard(card) {
  const schema = Joi.object({
    question: Joi.string().required(),
    answer: Joi.string().required(),
    deck: Joi.objectId().required()
  });

  return schema.validate(card);
}
