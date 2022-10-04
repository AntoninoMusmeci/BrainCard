import React, { useState } from "react";
import Card from "../Components/Card";
import Answare from "../Components/Answare";
import Question from "../Components/Question";
import styled from "styled-components";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
const questions = [
  {
    question: "What is the question-answer relationship strategy?",
    answare:
      "The question-answer relationship (QAR) strategy helps students understand the different types of questions. By learning that the answers to some questions are “Right There” in the text, that some answers require a reader to “Think and Search,” and that some answers can only be answered “On My Own,” students recognize that they must first consider the question before developing an answer.",
  },
  {
    question: "How to use the question-answer relationship strategy",
    answare:
      "The teacher introduces 5th grade students to the QAR strategy. The teacher guides students through the process of deciding where and how they found the answer to a series of questions. At the end of the lesson, the teacher summarizes the four types of questions and se",
  },
];
function Questions() {
  const [flip,setFlip] = useState(false)
  const [questionNumber, setQuestionNumber] = useState(0);
  const increseQuestionNumber = () => {
    setFlip(false)
    setQuestionNumber((state) => state + 1);
  };

  const decreseQuestionNumber = () => {
    setFlip(false)
    setQuestionNumber((state) => state - 1);
  };

  
  return (
    <CardGrid>
      <Card
        front={<Question question={questions[questionNumber].question} />}
        back={<Answare answare={questions[questionNumber].answare} />}
        flipState = {[flip,setFlip]}
      />
      <div className="command">
        {/* <button onClick={decreseQuestionNumber}>
          <BsArrow90DegLeft /> Prev{" "}
        </button> */}
        <button onClick={increseQuestionNumber}>Repete </button>
        <button onClick={increseQuestionNumber}> Good </button>
        <button onClick={increseQuestionNumber}> Easy </button>
        {/* <button onClick={increseQuestionNumber}>
          {" "}
          Next <BsArrow90DegRight />{" "}
        </button> */}
      </div>
    </CardGrid>
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
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  button {
    width: 5rem;
    height: 2rem;
  }
`;

export default Questions;
