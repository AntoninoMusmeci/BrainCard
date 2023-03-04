
import { router as decks } from "../routes/decks.js";
import { router as cards } from "../routes/cards.js";
import { router as users } from "../routes/users.js";
import { router as auth } from "../routes/auth.js";
import express from "express";

export const handleRoute = function(app) {
    app.use(express.json());
    app.use("/api/decks", decks);
    app.use("/api/cards", cards);
    app.use("/api/users", users);
    app.use("/api/auth", auth)
}