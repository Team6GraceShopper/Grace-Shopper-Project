import React ,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import styled  from 'styled-components';


const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  const [open, setOpen] = useState(false);


  return (
    <div>
    {isLoggedIn ? (
      <TopNavBar>
        <ContainerForTop>
          <img src='walmars7.png' height='200px' width='200px'></img>
          
      <InputBox />

      <Link>
      <SearchButton>
          <SearchIcon />
      </SearchButton>
      </Link>

      <Link to='/cart'>
      <ShoppingCartButton>
        <ShoppingCartIcon />
      </ShoppingCartButton>
      </Link>

          <Link to='/accountmanagment'>
          <AccountButton>
            <PersonIcon/>
          </AccountButton>
          </Link>
        
        <MenuContainer >
          <MenuTrigger onClick={()=> setOpen(!open)}>
            <MenuButton >
              <MenuIcon/>
            </MenuButton>
          </MenuTrigger>

          {open ? <DropDownMenu>
            <Link><DropdownItems>Contact</DropdownItems></Link>
            <Link><DropdownItems>About</DropdownItems></Link>
            <Link><DropdownItems>Creators</DropdownItems></Link>
            <Link><DropdownItems onClick={logoutAndRedirectHome}>Logout</DropdownItems></Link>
          </DropDownMenu> : <div></div>}
  
        </MenuContainer>

        

        </ContainerForTop>
      </TopNavBar>

      ) : (
      
      <TopNavBar>
        <ContainerForTop>

          <img src='walmars7.png' height='200px' width='200px'></img>
      <InputBox />

      <Link>
      <SearchButton>
          <SearchIcon />
      </SearchButton>
      </Link>

    
      <Link to='/cart'>
      <ShoppingCartButton>
        <ShoppingCartIcon/>
      </ShoppingCartButton>
      </Link>
      

          <Link to='/accountmanagment'>
          <AccountButton>
            <PersonIcon/>
          </AccountButton>
          </Link>
        
        <MenuContainer>
          <MenuTrigger onClick={()=> setOpen(!open)}>
            <MenuButton>
              <MenuIcon/>
            </MenuButton>
          </MenuTrigger>

          {open ? <DropDownMenu>
            <Link><DropdownItems>Contact</DropdownItems></Link>
            <Link><DropdownItems>About</DropdownItems></Link>
            <Link><DropdownItems>Creators</DropdownItems></Link>
          </DropDownMenu> : <div></div>}

        </MenuContainer>

        </ContainerForTop>
      </TopNavBar>
      )}
      </div>
  );
};

const TopNavBar = styled.nav`

`

const ContainerForTop = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

const InputBox = styled.input`
height: 30px;
width: 50%;
`

const SearchButton = styled.button`
height: 30px;
width: 8vw;
background-color: #5e17eb;
cursor: pointer;
border: none;
border-radius: 5%;
&:hover {
  background-color: #7A42EB;
}
`

const ShoppingCartButton = styled.button`
height: 30px;
width: 8vw;
background-color: #5e17eb;
cursor: pointer;
border: none;
border-radius: 5%;
&:hover {
  background-color: #7A42EB;
}
`

const AccountButton = styled.button`
height: 30px;
width: 8vw;
background-color: #5e17eb;
cursor: pointer;
border: none;
border-radius: 5%;
&:hover {
  background-color: #7A42EB;
}
`

const MenuContainer = styled.div`

`
const MenuTrigger = styled.div`
`

const MenuButton = styled.button`
background-color: #5e17eb;
height: 30px;
cursor: pointer;
border: none;
border-radius: 5%;
&:hover {
  background-color: #7A42EB;
}
`

const DropDownMenu = styled.div`
position: absolute;
border: 1px solid black;
width: 100px;
background-color: #5e17eb;
right: 21px;
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 10px;
border-radius: 5%;
`


const DropdownItemsBox = styled.div`

`

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


`



export default Navbar;


// {isLoggedIn ? (
//   <div>
//     {/* The navbar will show these links after you log in */}
//     <Link to="/home">Home</Link>
//     <button type="button" onClick={logoutAndRedirectHome}>
//       Logout
//     </button>
//   </div>
// ) : (
//   <div>
//     {/* The navbar will show these links before you log in */}
//     <Link to="/login">Login/SignUp</Link>
//     {/* <Link to="/signup">Sign Up</Link> */}
//   </div>
// )}