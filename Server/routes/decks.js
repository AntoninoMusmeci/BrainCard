import express from "express";
import { validateDeck, Deck } from "../models/deck.js";
export const router = express.Router();

router.get("/", async (req, res) => {
  const decks = await Deck.find().sort("name");
  res.send(decks);
});

router.get("/:id", async (req, res) => {
  const deck = await Deck.findById(req.params.id);
  if (!deck) return res.status(404).send("Not Found");
  return res.send(deck);
});

router.post("/", async (req, res) => {
  const { error } = validateDeck(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const deck = new Deck({
    name: req.body.name,
    description: req.body.description || "",
  });
  await deck.save();
  res.send(deck);
});

router.delete("/:id", async (req, res) => {
  const deck = await Deck.deleteOne({ _id: req.params.id });
  if (!deck) return res.status(404).send("Not found");
  res.send(deck);
});

router.put("/:id", async (req, res) => {
  const { error } = validateDeck(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const deck = await Deck.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name, description: req.body.description } },
    { new: true }
  );
  if (!deck) return res.status("404").send("Not found");
  res.send(deck);
});
