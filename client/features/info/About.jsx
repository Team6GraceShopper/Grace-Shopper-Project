import React from 'react';
import styled from 'styled-components';

function About() {
  return (
<AboutContainer>
      <TitleAbout>About Us</TitleAbout>
      <AboutBox>
      <AboutDescription>Walmars is a leading intergalactic e-commerce company that was founded in the year 3442. Our mission is to provide our customers with the best possible shopping experience by offering a wide range of products and services at competitive prices. We have everything you need, from everyday essentials to unique and hard-to-find items. We use advanced technology to ensure that your purchases are delivered to you faster than you ever thought possible, no matter where you are in the galaxy.

In addition to our extensive product selection, we also pride ourselves on our customer service. Our team of experts is available to assist you with any questions or concerns you may have, and our easy-to-use website makes it simple to find what you're looking for. Whether you're a busy professional or a stay-at-home parent, Walmars has something for everyone. We strive to make shopping with us as convenient and enjoyable as possible, and we're constantly working to improve our service and selection to meet the changing needs of our customers.

We also understand the importance of being socially and environmentally responsible. Therefore, we work hard to reduce our impact on the planet. We have implemented sustainable practices throughout our operations, from sourcing materials to packaging and shipping. We also support various charitable causes and organizations that align with our values. By choosing Walmars, you can trust that you're not just getting great products and service, but also supporting a company that cares about its impact on the world.

Our technology is state of the art and it is constantly updated to ensure that we can offer the best service possible. We are always looking for new ways to innovate and improve our customer's shopping experience. From our user-friendly website to our quick delivery times, we go above and beyond to make sure our customers are satisfied.

As we look to the future, we are committed to continuing to grow and expand our offerings. We will always be on the lookout for new and exciting products to add to our selection, and we will continue to work on improving our service and delivery times. We are dedicated to providing the best possible shopping experience for our customers and we will always strive to exceed their expectations.

Thank you for considering Walmars as your go-to destination for all your shopping needs. We look forward to serving you in the near future.</AboutDescription>

<FoundersAndLineBox>
<FoundersTitle>Founders</FoundersTitle>
<hr width='80%' color='black'/>
</FoundersAndLineBox>


<ImgBox>
    <a target='_blank' href='https://www.linkedin.com/in/andrewspencer44/'>
    <OneImg src='andrew.jpeg' height='100px' width='100px'/>
    </a>

    <a target='_blank' href='https://www.linkedin.com/in/kylecolangelo/'>
    <OneImg src='kyle.jpg' height='100px' width='100px'/>
    </a>

    <a target='_blank' href='https://www.linkedin.com/in/mathis-stone/'>
    <OneImg src='mathis.jpg' height='100px' width='100px'/>
    </a>
    
    <a target='_blank' href='https://www.linkedin.com/in/andrewspencer44/'>
    <OneImg src='walmars7.png' height='100px' width='100px'/>
    </a>
</ImgBox>

      </AboutBox>

    </AboutContainer>
  )
}


const AboutContainer = styled.div`
width: 100%;
height: 75vh;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
`
const TitleAbout = styled.h1`
align-self: center;
font-family: "Trebuchet MS", Tahoma, sans-serif;
`
const AboutBox = styled.div`
display: flex;
background-color: #5e17eb;
border-radius: 5px;
justify-content: space-around;
height: 70%;
align-items: center;
flex-direction: column;
`

const AboutDescription = styled.p`
text-align: center;
width: 90%;
font-family: "Trebuchet MS", Tahoma, sans-serif;
font-weight: bold;
`

const FoundersAndLineBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const FoundersTitle = styled.h2`

`

const ImgBox = styled.div`
width: 80%;
display: flex;
justify-content: space-around;
`

const OneImg = styled.img`
border-radius: 50%;
border: 2px solid black;
`

export default About