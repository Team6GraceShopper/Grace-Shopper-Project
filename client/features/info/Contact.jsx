import React from 'react';
import styled from 'styled-components';

function Contact() {
  return (
    <ContactContainer>
      <TitleContact>Contact Us</TitleContact>
      <ContactBox>
      <InfoBox>

      <NameAndEmail>
      <NameInput placeholder='Name'/>
      <EmailInput placeholder='Email Address'/>
      </NameAndEmail>

      <TextArea/>
      <SendButtonBox>
      <SendButton>Send</SendButton>
      </SendButtonBox>

      </InfoBox>


      <CompanyImg src='group-company-photo.png'/>
      </ContactBox>

    </ContactContainer>
  )
}


const ContactContainer = styled.div`
width: 100%;
height: 75vh;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
`
const TitleContact = styled.h1`
align-self: center;
`
const ContactBox = styled.div`
display: flex;
background-color: #5e17eb;
border-radius: 5px;
justify-content: space-around;
height: 70%;
align-items: center;
`
const InfoBox = styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const NameAndEmail = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 20%;
width: 80%;

`

const NameInput = styled.input`
width: 35%;
border: none;
border-radius: 5px;
font-family: "Trebuchet MS", Tahoma, sans-serif;
border: 2px solid black;
`
const EmailInput = styled.input`
width: 35%;
border: none;
border-radius: 5px;
font-family: "Trebuchet MS", Tahoma, sans-serif;
border: 2px solid black;
`

const TextArea = styled.textarea`
width: 100%;
height: 50%;
border-radius: 10px;
font-family: "Trebuchet MS", Tahoma, sans-serif;
border: 2px solid black;
`
const SendButtonBox = styled.div`
height: 10%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`

const SendButton = styled.button`
width: 10%;
height: 40%;
border: none;
border-radius: 5px;
background-color: #008037;
font-family: "Trebuchet MS", Tahoma, sans-serif;
font-weight: bold;
cursor: pointer;
border: 2px solid black;
&:hover {
  background-color: #3F8B60;
}
`

const CompanyImg = styled.img`
border-radius: 5px;
height: 60%;
border: 2px solid black;
`
export default Contact