import React from 'react'
import CardCollection from '../Components/CardCollection'
import styled from 'styled-components'
function HomePage() {
  return (
    <CartGallery >

        <CardCollection></CardCollection>
        <CardCollection></CardCollection>
    </CartGallery >
  )
}

const CartGallery = styled.div`

display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

`
export default HomePage