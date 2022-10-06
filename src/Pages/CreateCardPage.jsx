import React, { useState } from "react";
import { EditCard } from "../Components/EditCard";
import styled from "styled-components";
import { convertToRaw } from "draft-js";

import { EditorState} from "draft-js";
function CreateCardPage() {
  const [frontCard, setFrontCard] = useState(EditorState.createEmpty());
  const [backCard, setBackCard] = useState(EditorState.createEmpty());
  const [cards, setCards] = useState([])
  const CreateCard = () => {
    const card = { front: JSON.stringify(convertToRaw(frontCard.getCurrentContent())),
      back: JSON.stringify(convertToRaw(backCard.getCurrentContent()))}
      console.log(card)
      console.log(card.front)
      setCards([...cards, card])
  }
  return (
    <CreateCardWrapper>
      <div>
        <h1> Front </h1>
        <EditCard editorState = {frontCard} setEditorState={setFrontCard}></EditCard>
      </div>
      <div>
        <h1> Back</h1>
        <EditCard  editorState = {backCard} setEditorState={setBackCard}></EditCard>
      </div>      
      <button
        onClick={() =>{ CreateCard()

          // setCards(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
        }
        }
      >
        Create Card
      </button> 
      
    </CreateCardWrapper>
  );
}

const CreateCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 10px;
`;
export default CreateCardPage;
