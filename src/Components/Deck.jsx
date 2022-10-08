import React from 'react'
import styled from 'styled-components'
// import logo from "../logo-black.svg"
// import {ReactComponent as Logo} from '.././logo-black.svg';

function Deck({title,numberOfCards}) {
  return (
    <DeckStyle>
        {/* <img src={logo} />  */}
        {/* <Logo/> */}
       <h2> {title}</h2>
       <p> {numberOfCards} New Cards</p>
    </DeckStyle>
  )
}


const DeckStyle = styled.div`
 
  background: linear-gradient(to left, #f8b500, #fceabb);;
  height: 100px ;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 0.35rem;
  color: white;
  font:2rem;

  cursor: pointer;
  /* svg{ 
    width: 100px;
    height: 100px;
    tintColor: "any color"
    
  } */
`
export default Deck