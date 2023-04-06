import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Deck() {
  const navigate = useNavigate();
  function startDeck() {
    navigate(`/questions/`);
  }
  return (
    <DeckDescription>
      <div>
        <p>New:</p> 15
      </div>

      <div>
        <p>To Review:</p> 0
      </div>
      <button onClick={startDeck}>Start Study</button>
    </DeckDescription>
  );
}

const DeckDescription = styled.main`
  background-color: gray;
  height: 100vh;
  width: 350px;
  margin: auto;
  padding: 20px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      margin: 0;
      font-size: 20px;
    }
  }
`;
export default Deck;
