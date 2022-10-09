import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ShowCard } from "../Components/ShowCard";
import { useStateContext } from "../utilities/context";
import { readDeck } from "../utilities/api";
function Questions() {
  const { id } = useParams();
  const { cards, setCards } = useStateContext();

  useEffect(() => {
    readDeck(id)
      .then(setCards)
      .catch((error) => console.log(error));
  }, [id, setCards]);

  useEffect(() => {
    if (cards.length > 0)
      console.log(
        cards,
        cards[questionNumber].front,
        cards[questionNumber].back
      );
  }, [cards]);
  const [flip, setFlip] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const increseQuestionNumber = () => {
    setFlip(false);
    setQuestionNumber((state) => state + 1);
  };

  return (
    <>
      {cards.length > 0 ? (
        <CardGrid>
          <Card
            front={<ShowCard card={cards[questionNumber].front} />}
            back={<ShowCard card={cards[questionNumber].back} />}
            flipState={[flip, setFlip]}
          />
          <div className="command">
            <button onClick={increseQuestionNumber}> Don't know</button>
            <button onClick={increseQuestionNumber}> Good </button>
            <button onClick={increseQuestionNumber}> Easy </button>
          </div>
        </CardGrid>
      ) : (
        <div>
          "There are no cards in this deck yet"
          <button> "Add the first card" </button>{" "}
        </div>
      )}
    </>
  );
}
const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 600px;

  .command {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  button {
    width: 6rem;
    height: 4rem;
    padding: 1px;
    background-color: red;
    border: none;
    color: white;
    font-size: 1rem;
  }
  button:nth-child(2) {
    background-color: blue;
  }
  button:nth-child(3) {
    background-color: green;
  }
`;

export default Questions;
