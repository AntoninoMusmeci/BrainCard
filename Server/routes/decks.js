import express from "express";
import { validateDeck, Deck } from "../models/deck.js";
import { auth } from "../middleware/auth.js";
import { asyncMiddleware } from "../middleware/async.js";
import { admin } from "../middleware/admin.js";

export const router = express.Router();

router.get("/", auth, asyncMiddleware(async(req, res) => {
  const decks = await Deck.find().sort("name");
  res.send(decks);
}));

router.get("/:id", auth, asyncMiddleware(async (req, res) => {
  const deck = await Deck.findById(req.params.id).populate("cards");
  if (!deck) return res.status(404).send("Not Found");
  return res.send(deck);
}));

router.post("/", auth, asyncMiddleware(async (req, res) => {
  const { error } = validateDeck(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const deck = new Deck({
    name: req.body.name,
    description: req.body.description || "",
  });
  await deck.save();
  res.send(deck);
}));

router.delete("/:id", [auth,admin], asyncMiddleware( async (req, res) => {
  const deck = await Deck.deleteOne({ _id: req.params.id });
  if (!deck) return res.status(404).send("Not found");
  res.send(deck);
}));

router.put("/:id", auth, asyncMiddleware( async (req, res) => {
  const { error } = validateDeck(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const deck = await Deck.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name, description: req.body.description } },
    { new: true }
  );
  if (!deck) return res.status(404).send("Not found");
  res.send(deck);
}));
