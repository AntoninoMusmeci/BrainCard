import express from "express";
import Joi from "joi";
export const router = express.Router();

const decks = [
  {
    id: 1,
    name: "Rendering in React",
    description:
      "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. ",
  },
  {
    name: "React Router",
    description:
      "React Router is a collection of navigational components that compose declaratively with your application.",
    id: 2,
  },
  {
    id: 3,
    name: "React Hooks",
    description:
      "Hooks allow you to use JavaScript functions to create React components in a more simple way and help reduce a lot of boilerplate code.",
  },

  {
    name: "test",
    description: "",
    id: 4,
  },
  {
    name: "",
    description: "",
    id: 5,
  },
  {
    name: "Ecom",
    description: "",
    id: 6,
  },
];

router.get("/", (req, res) => {
  res.send(decks);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deck = decks.find((deck) => deck.id === id);
  if (!deck) return res.status(404).send("Not Found");
  return res.send(deck);
});

router.post("/", (req, res) => {
  const { error } = validatedeck(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const newDeck = {
    id: decks.length + 1,
    name: req.body.name,
    description: req.body.description || "",
  };
  decks.push(newDeck);
  res.send(newDeck);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deck = decks.find((deck) => deck.id === id);
  if (!deck) return res.status(404).send("Not found");
  const index = decks.indexOf(deck);
  decks.splice(index, 1);
  res.send(decks);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deck = decks.find((deck) => deck.id === id);
  if (!deck) return res.status("404").send("Not found");
  const { error } = validatedeck(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  deck.name = req.body.name;
  if (req.body.description) deck.description = req.body.description;
  res.send(deck);
});

function validatedeck(deck) {
  const schema = Joi.object({
    name: Joi.string().max(256).required(),
    description: Joi.string().max(256).allow(""),
  });

  return schema.validate(deck);
}
