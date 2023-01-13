import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import styled from "styled-components";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Container = styled.div`
  display: flex;
  background-color: #9254C8;
  color: #fff;
  border-radius: 20px;
  width: 100vw;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>WALMARS ™️</Logo>
        <Desc>
          Contact
          <br />
          About
          <br />
          Creators
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <GitHubIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            <RedditIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RocketLaunchIcon style={{ marginRight: "10px" }} /> In a galaxy far
          far away main st.
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> +999-999-9999
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@walmars.io
        </ContactItem>
      </Right>
    </Container>
  );
}

export default Footer;
