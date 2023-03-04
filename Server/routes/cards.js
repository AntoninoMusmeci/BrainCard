import express from "express";
import { Card, validateCard } from "../models/card.js";
import { Deck } from "../models/deck.js";
import { auth } from "../middleware/auth.js";
import { asyncMiddleware } from "../middleware/async.js";
export const router = express.Router();

router.post(
  "/",
  auth,
  asyncMiddleware(async (req, res) => {
    const { error } = validateCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const card = new Card({
      question: req.body.question,
      answer: req.body.answer,
      difficulty: "Hard",
    });

    card.save().then((cardDoc) => {
      Deck.findById(req.body.deck).then((deck) => {
        deck.cards.push(cardDoc._id);
        deck.save();
      });
    });
    res.send(card);
  })
);
