import React, { useState } from "react";
import { EditCard } from "../Components/EditCard";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../utilities/context";
import { createCard } from "../utilities/api";
function CreateCardPage() {
  let {id} = useLocation().state;
  const { setCards } = useStateContext();
  const [frontCard, setFrontCard] = useState("");
  const [backCard, setBackCard] = useState("");

  const CreateCard = () => {
    const card = {
      deckId: Number(id),
      front: JSON.stringify(frontCard),
      back: JSON.stringify(backCard),
    };
    createCard(card)
    setCards((c) => [...c, card]);
  };
  return (
    <CreateCardWrapper>
      <div>
        <h1> Front </h1>
        <EditCard
          editorState={frontCard}
          setEditorState={setFrontCard}
        ></EditCard>
      </div>
      <div>
        <h1> Back</h1>
        <EditCard
          editorState={backCard}
          setEditorState={setBackCard}
        ></EditCard>
      </div>
      <button onClick={CreateCard}>Create Card</button>
    </CreateCardWrapper>
  );
}

const CreateCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  justify-content: center;
  align-items: center;
  padding: 10px;
  > div {
    width: 80%;
    @media (max-width: 400px) {
      width: 100%;
    }
  }
  button {
    margin-top: 20px;
    background-color: rgb(54 34 111);
    border: none;
    cursor: pointer;
    color: var(--text-color);
    width: 70%;
    height: 30px;
  }
`;
export default CreateCardPage;
