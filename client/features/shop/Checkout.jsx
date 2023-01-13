import React from 'react'
import styled from "styled-components";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(200, 200, 200, 0.8)
    ),
    url("productImages/spaceMinerals2.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  gap: 5vw;
`;

const CartBrief = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
display: flex;
flex-direction: column;
border-radius: 20px;
padding: 20px;
width: 35vw;
`
const CartText = styled.p`
color: black;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: rgb(255, 255, 255, 0.5);
  padding: 20px;
width: 35vw;
`;

const Input = styled.input`

  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: 2px solid gold;
  padding: 15px 20px;
  background-color: white;
  color: gold;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1.4rem;
`;

function Checkout() {
  return (

    <Body>
      <CartBrief>
        <CartText>
          Sub Total:
        </CartText>
      </CartBrief>

      <Form>
        <Title>CHECKOUT</Title>
        <Input placeholder="first name" />
        <Input placeholder="last name" />
        <Input placeholder="email" />
        <h5>Shipping Address:</h5>
        <Input placeholder="street address" />
        <Input placeholder="city" />
        <Input placeholder="state" />
        <Input placeholder="country" />
        <Input placeholder="telephone" />
        <Agreement>
          By placing an order, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>Checkout</Button>
      </Form>
    </Body>
  );
};


export default Checkout