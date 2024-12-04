import styled from "styled-components";

export default function Card({ front, back, showAnswer }) {
  return (
    <CardStyle>
      <Question>{front}</Question>
      {showAnswer ? <Answer> {back} </Answer> : null}
    </CardStyle>
  );
}

const CardStyle = styled.div`
  background-color: gray;
  height: 100vh;
  width: 100%;
`;

const Question = styled.div`
  font-size: 20px;
  min-height: 40px;
  border-bottom: 1px solid black;
  text-justify: center;
`;

const Answer = styled.div`
  font-size: 20px;
`;
