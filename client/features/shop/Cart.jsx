import React from 'react'
import styled from "styled-components";
import axios from "axios";

const cart = [
  "item1 khhbvkuvyhbcfdkivyfbvyobfovlyfbvof8uyivbfp8v9bfiuovbFDSp9uvbhfd9pv;dfghvd9spvshv ", "item2", "item3"]

let itemCount = 0

const Body = styled.div`
  width: 95vw;
  height: 99vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(200, 200, 200, 0.8)
    ),
    url("productImages/spaceMinerals1.png") center;
  background-size: cover;
  display: flex;
 flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  color: gold;
  text-shadow: 3px 3px 2px black;
  gap:1vh;
  `
const Title = styled.h1`
`

const RemBtn = styled.button`
  width: 5vw;
  background-color: rgba(255, 255, 255, 0);
  color: red;
  border: 2px solid red;
  height: 2rem;
  `
const ItemBox = styled.div`
  background-color: rgba(150, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  `
const QtyAndRemBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;
  `
const ItemName = styled.p`
margin: 1rem;
`
const ItemPhoto = styled.img`
height: 3rem;
width:3rem;
margin: 0.2rem 1rem;
`
const ItemPhotoAndName = styled.div`
display: flex;
align-items: center;
`
const CheckoutBtn = styled.button`
background-color: rgba(255, 255, 255, 0);
width: 15vw;
padding: 15px 20px;
border: 2px solid gold;

background-color: white;
color: gold;
cursor: pointer;
border-radius: 20px;
font-size: 1.4rem;
color: gold;
justify-self: flex-end;
`
const TotQty = styled.p`
font-size: 1.5em;

`
const TotPrice = styled.div`
font-size: 1.5em;
`
const TotalsAndCheckoutBtn = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;
margin-right: 1rem;
`

export default function Cart() {

  return (
    <Body>
      <Title>Cart</Title>
      {cart.map((item) => {
        itemCount++
        return (
          <ItemBox>
            <ItemPhotoAndName>
              <ItemPhoto src="walmars7.png" alt="X"></ItemPhoto>
              <ItemName>{item}</ItemName>
            </ItemPhotoAndName>
            <QtyAndRemBtn>
              <p>Qty: 1</p>
              <RemBtn>Remove</RemBtn>
            </QtyAndRemBtn>
          </ItemBox>
        )
      })
      }
      <TotalsAndCheckoutBtn>
        <TotQty>Total Qty: {itemCount}</TotQty>
        <TotPrice>Subtotal: ⬦{itemCount * 10}</TotPrice>
        <CheckoutBtn>Checkout</CheckoutBtn>
      </TotalsAndCheckoutBtn>
    </Body>
  )
}