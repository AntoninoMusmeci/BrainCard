import { useState } from "react";
import "../styles.css";
import styled from "styled-components";

export default function Card({ front, back, flipState}) {
  // const [flip, setFlip] = useState(false);
  console.log(flipState)
  const [flip, setFlip] = flipState
  const handleClick = () => {
    setFlip(!flip);
  };
  return (
    <CardStyle className={`card ${flip ? "flip" : ""}`}>
      <div className="front" onClick={handleClick}>
       {front}
      </div>
      <div className="back" onClick={handleClick}>
        {back}
      </div>
    </CardStyle>
  );
}


const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.4rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  background-color: #f1f1f1;
  height: 90%;
  width: 90%;
  max-width: 500px;
  margin: 10px;

`;
