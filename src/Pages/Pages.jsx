import React from "react";
import { Routes, Route } from "react-router-dom";
import Questions from "./Questions";
import HomePage from "./HomePage";
import CreateCardPage from "./CreateCardPage";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/createcard" element={<CreateCardPage />} />
      </Routes>
    </>
  );
}

export default Pages;
