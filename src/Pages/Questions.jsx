import React, { useState } from "react";
import Card from "../Components/Card";
import Answare from "../Components/Answare";
import Question from "../Components/Question";
import styled from "styled-components";
import { ShowCard } from "../Components/ShowCard";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
const questions = [
  {
    question: "What is the question-answer relationship strategy?",
    answare:
      '{"blocks":[{"key":"7s5qn","text":"fesfsfsfsfffffffffff","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1gfg9","text":"sssssssssssssssssssosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7kpqb","text":"fosijfsofjf ?d","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5nack","text":"fffefsfsfsfsff","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":14,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"4573j","text":"fsfsfù","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"9or4l","text":"s","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":1,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
  },
  {
    question: "How to use the question-answer relationship strategy",
    answare:
      '{"blocks":[{"key":"7s5qn","text":"fesfsfsfsfffffffffff","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1gfg9","text":"sssssssssssssssssssosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7kpqb","text":"fosijfsofjf ?d","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5nack","text":"fffefsfsfsfsff","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":14,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"4573j","text":"fsfsfù","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"9or4l","text":"s","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":1,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
  },
];
function Questions() {
  const [flip, setFlip] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const increseQuestionNumber = () => {
    setFlip(false);
    setQuestionNumber((state) => state + 1);
  };

  const decreseQuestionNumber = () => {
    setFlip(false);
    setQuestionNumber((state) => state - 1);
  };

  return (
    <>
      <CardGrid>
        <Card
          front={<ShowCard card={questions[questionNumber].answare} />}
          back={<ShowCard card={questions[questionNumber].answare} />}
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
