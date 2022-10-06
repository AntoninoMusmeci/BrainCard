import React, { useState } from "react";
import Card from "../Components/Card";

import styled from "styled-components";
import { ShowCard } from "../Components/ShowCard";
import { useStateContext } from "../utilities/context";
function Questions() {
  const { cards } = useStateContext();
  console.log(cards)
  const [flip, setFlip] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const increseQuestionNumber = () => {
    setFlip(false);
    setQuestionNumber((state) => state + 1);
  };

  return (
    <>
      <CardGrid>
        <Card
          front={<ShowCard card={cards[questionNumber].front} />}
          back={<ShowCard card={cards[questionNumber].back} />}
          flipState={[flip, setFlip]}
        />
        <div className="command">
          {/* <button onClick={decreseQuestionNumber}>
          <BsArrow90DegLeft /> Prev{" "}
        </button> */}
          <button onClick={increseQuestionNumber}> Don't know</button>
          <button onClick={increseQuestionNumber}> Good </button>
          <button onClick={increseQuestionNumber}> Easy </button>
          {/* <button onClick={increseQuestionNumber}>
          {" "}
          Next <BsArrow90DegRight />{" "}
        </button> */}
        </div>
      </CardGrid>
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
