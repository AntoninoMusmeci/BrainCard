import React, { useState, useEffect } from "react";
import Deck from "../Components/Deck";
import styled from "styled-components";
import { listDecks, createDeck } from "../utilities/api";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Modal from "../Components/Modal";
import { useForm } from "../utilities/useForm";
import {useNavigate} from "react-router-dom"
function HomePage() {
  const [decks, setDecks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [values, handleChange] = useForm({ name: "", description: "" });
  const navigate = useNavigate()
  // useEffect to retrieve all existing decks
  useEffect(() => {
    listDecks()
      .then(setDecks)
      .catch((error) => console.log(error));
  }, [setDecks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    setDecks([...decks, values])
    await createDeck(values);
  };

  return (
    <>
      <CartGallery>
        {decks.map((deck) => (
          <div onClick = {() => {console.log("nav"); navigate(`/decks/${deck.id}/`)}}>
           <Deck   title={deck.name} numberOfCards={deck.cards?.length | 0} />
          </div>
         
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
