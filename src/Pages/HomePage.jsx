import React, { useState, useEffect } from "react";
import Deck, { DeckStyle, CardBorder, CardContent } from "../Components/Deck";
import styled from "styled-components";
import { listDecks, createDeck } from "../utilities/api";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Modal from "../Components/Modal";
import { useForm } from "../utilities/useForm";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const [decks, setDecks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [values, handleChange] = useForm({ name: "", description: "" });
  const navigate = useNavigate();
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
          <Deck title={deck.name} numberOfCards={deck.cards?.length | 0} />
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
              <div> Create Desk </div>
              <input name="name" onChange={handleChange} />
              <button type="submit">Submit</button>
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
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  div {
    color: black;
    position: absolute;
    top: 5%;
    left: 10px;
  }
  button {
    background-color: white;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    padding: 0;
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
