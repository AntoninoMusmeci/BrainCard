import { useState } from "react";
import styled from "styled-components";
import "../styles.css";

export default function Card({ front, back }) {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip);
  };
  return (
    <CardStyle flip={flip} onClick={handleClick}>
      {console.log(flip)}
      {flip ? <div>{front}</div> : <div>{back}</div>}
    </CardStyle>
  );
}

const CardStyle = styled.div`
  /* border-radius: 0.4rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  background-color: #f1f1f1;
  height: 90%;
  width: 70%;
  margin: 20px;
  padding: 20px; */
  /* transform-style: preserve-3d;
  transform: rotateY(${(props) => (props.flip ? "180deg" : 0)});
  transition: 150ms; */

  div {
    width: 100%;
    height: 100%;
    /* transform: rotateY(${(props) => (props.flip ? "180deg" : 0)}); */
  }
`;

// const CardFront = styled.div`
// width: 100%;
// height: 100%;
// position: absolute;
// transform: rotateY(180deg);

// `
