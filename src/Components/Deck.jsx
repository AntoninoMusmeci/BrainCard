import React from "react";
import styled from "styled-components";

export default function Deck({ title, numberOfCards }) {

   

  return (
    <DeckStyle className="deck" >
      <CardBorder/>
      <CardContent>
      <h2 > {title}</h2>
      <p> {numberOfCards} New Cards</p>
      </CardContent>

    </DeckStyle>
  );
}
export const CardBorder = styled.div`
      background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255,255,255,0.4),
      transparent 40%);
      z-index: 1;
` 
export const DeckStyle = styled.div`
  /* background: linear-gradient(to left, #f8b500, #fceabb); */
  /* background-color: rgb(250,250,250,0.02);
  border: 1px solid rgb(250,250,250,0.1);
  height: 260px;
  width: 300px;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column; */
  background-color: rgb(250,250,250,0.1);

  border-radius: 10px;
  cursor: pointer;
  height: 220px;
  width: 300px; 
  position: relative;


  :hover::before {
    opacity: 1;
    
  }

  ::before,  ${CardBorder}{
    border-radius: inherit;
    height: 100%;
    left: 0;
    top: 0;
    content: ""; 
    position: absolute;
    width: 100%;
    opacity: 0;
    transition: opacity 500ms;
    
  }
  ::before{
    background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255,255,255,0.06),
      transparent 40%);
      z-index: 3;
  }

`;


export const CardContent = styled.div`
  background-color: var(--card-color);
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  z-index: 2;
  color: var(--text-color);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: var(--card-color);
  border-radius: inherit;
  height: calc(100% - 2px);
  margin: 1px;
  position: relative;
  width: calc(100% - 2px);
  z-index: 2; */
` 



