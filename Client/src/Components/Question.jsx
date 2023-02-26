import React from "react";
import styled from "styled-components";
function Question({ question }) {
  return (
    <QuestionStyle>
      <p>{question}</p>
    </QuestionStyle>
  );
}


const QuestionStyle = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
 `
export default Question;

