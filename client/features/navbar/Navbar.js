import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <TopNavBar>
          <ContainerForTop>
            <LogoCursor>
              <LinkContainer to="/">
                <img src="walmars7.png" height="200px" width="200px"></img>
              </LinkContainer>
            </LogoCursor>
            <InputBox />

            <Link>
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </Link>

            <Link to="/cart">
              <ShoppingCartButton>
                <ShoppingCartIcon />
              </ShoppingCartButton>
            </Link>

            <Link to="/accountmanagment">
              <AccountButton>
                <PersonIcon />
              </AccountButton>
            </Link>

            <MenuContainer>
              <MenuTrigger onClick={() => setOpen(!open)}>
                <MenuButton>
                  <MenuIcon />
                </MenuButton>
              </MenuTrigger>

              {open ? (
                <DropDownMenu>
                  <Link to="/contact">
                    <DropdownItems>Contact</DropdownItems>
                  </Link>
                  <Link to="/about">
                    <DropdownItems>About</DropdownItems>
                  </Link>
                  <Link>
                    <DropdownItems onClick={logoutAndRedirectHome}>
                      Logout
                    </DropdownItems>
                  </Link>
                </DropDownMenu>
              ) : (
                <div></div>
              )}
            </MenuContainer>
          </ContainerForTop>
        </TopNavBar>
      ) : (
        <TopNavBar>
          <ContainerForTop>
            <LogoCursor>
              <LinkContainer to="/">
                <img src="walmars7.png" height="200px" width="200px"></img>
              </LinkContainer>
            </LogoCursor>
            <InputBox />

            <Link>
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </Link>

            <Link to="/login">
              <ShoppingCartButton>
                <ShoppingCartIcon />
              </ShoppingCartButton>
            </Link>

            <Link to="/login">
              <AccountButton>
                <PersonIcon />
              </AccountButton>
            </Link>

            <MenuContainer>
              <MenuTrigger onClick={() => setOpen(!open)}>
                <MenuButton>
                  <MenuIcon />
                </MenuButton>
              </MenuTrigger>

              {open ? (
                <DropDownMenu>
                  <Link to="/contact">
                    <DropdownItems>Contact</DropdownItems>
                  </Link>
                  <Link to="/about">
                    <DropdownItems>About</DropdownItems>
                  </Link>
                </DropDownMenu>
              ) : (
                <div></div>
              )}
            </MenuContainer>
          </ContainerForTop>
        </TopNavBar>
      )}
    </div>
  );
};

const TopNavBar = styled.nav``;

const ContainerForTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InputBox = styled.input`
  height: 30px;
  width: 50%;
  border-radius: 5px;
  border-color: #5e17eb;
  cursor: pointer;
`;

const SearchButton = styled.button`
  height: 30px;
  width: 8vw;
  background-color: #5e17eb;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #7a42eb;
  }
`;

const LogoCursor = styled.div`
  cursor: pointer;
`;

const ShoppingCartButton = styled.button`
  height: 30px;
  width: 8vw;
  background-color: #5e17eb;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #7a42eb;
  }
`;

const AccountButton = styled.button`
  height: 30px;
  width: 8vw;
  background-color: #5e17eb;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #7a42eb;
  }
`;

const MenuContainer = styled.div``;
const MenuTrigger = styled.div``;

const MenuButton = styled.button`
  background-color: #5e17eb;
  height: 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #7a42eb;
  }
`;

const DropDownMenu = styled.div`
  position: fixed;
  width: 100px;
  background-color: #5e17eb;
  right: 21px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 5%;
  z-index: 99;
`;

const DropdownItemsBox = styled.div``;

const DropdownItems = styled.ol`
  margin: 0;
  padding: 0;
  font-family: "Trebuchet MS", Tahoma, sans-serif;
  font-size: large;
  color: black;
  font-weight: bolder;
  &:hover {
    color: white;
  }
`;

export default Navbar;
