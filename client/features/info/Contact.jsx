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
      <SendButton>Send</SendButton>

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
border: 1px solid red;
justify-content: space-around;
height: 80%;
align-items: center;
`
const InfoBox = styled.div`
border: 1px solid black;
height: 100%;
width: 50%;
`
const NameAndEmail = styled.div`
display: flex;
justify-content: space-around;
`

const NameInput = styled.input`
width: 40%;
`
const EmailInput = styled.input`
width: 40%;
`

const TextArea = styled.textarea`
width: 100%;
height: 50%;
margin-top: 20px;
`
const SendButton = styled.button`
`

const CompanyImg = styled.img`
// border: 5px solid black;
border-radius: 5px;
height: 40vh
`
export default Contact