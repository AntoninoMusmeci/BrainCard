import express from "express";
import { validateDeck, Deck } from "../models/deck.js";
import { auth } from "../middleware/auth.js";
import { asyncMiddleware } from "../middleware/async.js";
import { admin } from "../middleware/admin.js";
import { User } from "../models/user.js";
export const router = express.Router();

router.get(
  "/",
  auth,
  asyncMiddleware(async (req, res) => {
    const decks = await Deck.find().sort("name");
    res.send(decks);
  })
);

router.get(
  "/:id",
  auth,
  asyncMiddleware(async (req, res) => {
    const deck = await Deck.findById(req.params.id).populate("cards");
    if (!deck) return res.status(404).send("Not Found");
    return res.send(deck);
  })
);

router.post(
  "/",
  auth,
  asyncMiddleware(async (req, res) => {
    const { error } = validateDeck(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const deck = new Deck({
      name: req.body.name,
      description: req.body.description || "",
    });
    deck.save().then((deck) => {
      User.findById(req.user._id).then((user) => {
        user.decks.push(deck._id);
        user.save();
      });
    });

    res.send(deck);
  })
);

router.delete(
  "/:id",
  [auth, admin],
  asyncMiddleware(async (req, res) => {
    const deck = await Deck.deleteOne({ _id: req.params.id });
    if (!deck) return res.status(404).send("Not found");
    res.send(deck);
  })
);

router.put(
  "/:id",
  auth,
  asyncMiddleware(async (req, res) => {
    const { error } = validateDeck(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findById(req.user._id)
  
    if(!user.decks.includes(req.params.id)) return res.status(400).send("Not found");
    
    const deck = await Deck.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { name: req.body.name, description: req.body.description } },
      { new: true }
    );
    if (!deck) return res.status(404).send("Not found");
    res.send(deck);
  })
);
