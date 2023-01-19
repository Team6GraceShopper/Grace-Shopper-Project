import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addUser } from "./signupSlice";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("productImages/Hydroscopic-Marzelvanes.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #5e17eb;
  color: white;
  cursor: pointer;
  border-radius: 20px;
`;

const DivContainer = styled.div`
display: flex;
justify-content: space-around;
`

const SignUp = () => {

  const dispatch = useDispatch();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(addUser({username, password, firstName, lastName, email, phoneNumber, address}))
 }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input onChange={e => setFirstName(e.target.value)} placeholder="name" />
          <Input onChange={e => setLastName(e.target.value)} placeholder="last name" />
          <Input onChange={e => setUserName(e.target.value)} placeholder="username" />
          <Input onChange={e => setEmail(e.target.value)} placeholder="email" />
          <Input onChange={e => setPassword(e.target.value)} placeholder="password" />
          <Input onChange={e => setAddress(e.target.value)} placeholder="address" />
          <Input onChange={e => setPhoneNumber(e.target.value)} placeholder="telephone" />
          <DivContainer>
          <Button type="submit">Create Account</Button>
          <Button>Already have an account?</Button>
          </DivContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY.</b>
          </Agreement>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
