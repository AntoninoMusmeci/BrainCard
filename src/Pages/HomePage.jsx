import React, { useState, useEffect } from "react";
import Deck from "../Components/Deck";
import styled from "styled-components";
import { listDecks } from "../utilities/api";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Modal from "../Components/Modal";
function HomePage() {
  const [decks, setDecks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    console.log(decks);
  }, [decks]);

  // useEffect to retrieve all existing decks
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("useEffect");
    listDecks(signal)
      .then(setDecks)
      .catch((error) => console.log(error));

    return controller.abort();
  }, [setDecks]);

  return (
    <>
      <CartGallery>
        {decks.map((deck) => (
          <Deck title={deck.name} numberOfCards={deck.cards.length} />
        ))}
      </CartGallery>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {(closeModal) => (
            <ModalInput>
              <div> Create Desk </div>
              <input />
              <button onClick={closeModal}>Submit</button>
            </ModalInput>
          )}
        </Modal>
      )}
      <CreateDeckButton
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <BsFillPlusCircleFill />{" "}
      </CreateDeckButton>
    </>
  );
}

const CartGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

const CreateDeckButton = styled.div`
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  svg {
    font-size: 50px;
    color: blue;
  }
`;

const ModalInput = styled.div`
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
