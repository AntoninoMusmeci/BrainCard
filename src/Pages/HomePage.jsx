import React, { useState, useEffect } from "react";
import Deck, { DeckStyle, CardBorder } from "../Components/Deck";
import styled from "styled-components";
import { listDecks, createDeck } from "../utilities/api";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Modal from "../Components/Modal";
import { useForm } from "../utilities/useForm";

function HomePage() {
  const [decks, setDecks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [values, handleChange] = useForm({ name: "", description: "" });

  // useEffect to retrieve all existing decks
  useEffect(() => {
    listDecks()
      .then(setDecks)
      .catch((error) => console.log("error!"));
  }, [setDecks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    setDecks([...decks, values]);
    await createDeck(values);
  };
  const handleMouseMove = (e) => {
    for (const card of document.getElementsByClassName("deck")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <Home>
      <CartGallery onMouseMove={(e) => handleMouseMove(e)}>
        {decks.map((deck) => (
          <Deck title={deck.name} id = {deck.id} numberOfCards={deck.cards?.length | 0} />
        ))}
      </CartGallery>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {(closeModal) => (
            <ModalInput
              onSubmit={(e) => {
                handleSubmit(e);
                closeModal();
              }}
            >
              <div> Create Deck </div>
              <input name="name" onChange={handleChange} />
              <button type="submit">Create</button>
            </ModalInput>
          )}
        </Modal>
      )}
      <CreateDeckButton
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <BsFillPlusCircleFill />
      </CreateDeckButton>
    </Home>
  );
}

const CartGallery = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  width: calc(100% - 20px) */
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 916px;
  width: calc(100% - 20px);

  :hover > ${DeckStyle} > ${CardBorder} {
    opacity: 1;
  }
   @media(max-width: 1000px) {
    max-width: 1000px;
   
  }
`;

const Home = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;

`;

const CreateDeckButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  z-index: 100;
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(54 34 111);
  svg {
    font-size: 40px;
    color: rgb(141 110 228);
  }
`;

const ModalInput = styled.form`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  div {
    color: black;
  }
  button {
    background-color: rgb(54 34 111);
    border: none;
    cursor: pointer;

    color: var(--text-color);
    width: 50%;
    height: 30px;
  }
  input {
    width: 90%;
    margin: 10px;
    outline: 0;
    border-width: 0 0 2px;
    border-color: black;
  }
`;
export default HomePage;
