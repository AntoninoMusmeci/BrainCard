import React from "react";
import { Routes, Route } from "react-router-dom";
import Questions from "./Questions";
import HomePage from "./HomePage";
import CreateCardPage from "./CreateCardPage";
import Deck from "./Deck";
function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/decks/:id/" element={<Deck />} />
        <Route path="/createcard" element={<CreateCardPage />} />
      </Routes>
    </>
  );
}

export default Pages;
