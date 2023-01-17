import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LinkContainer } from 'react-router-bootstrap';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginAndSignupBox>
        <LoginBox>
        <form onSubmit={handleSubmit} name={name}>
          <UsernameInput name="username" placeholder='Username'/>
          <PasswordInput name="password" type="password" placeholder='Password'/>
          <LoginButton type="submit">Login</LoginButton>
          </form>
          <LinkContainer to={{ pathname: '/signup', replace: true }}><NewHereLink>Sign Up</NewHereLink></LinkContainer>
        </LoginBox>
        <ImgBox>
        <LoginImg height='600px;' width='300px' src='loginPage.jpg' />
        <LoginImg height='600px;' width='300px' src='loginPage2.jpg' />
        <LoginImg height='600px;' width='300px' src='loginPage3.jpg' />
        </ImgBox>
          
      </LoginAndSignupBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 75vh;
`

const LoginTitle = styled.h1`
display: flex;
align-self: center;
font-family: "Trebuchet MS", Tahoma, sans-serif;
`

const LoginAndSignupBox = styled.div`
background-color: #5e17eb;
display: flex;
justify-content: center;
border-radius: 5px;
flex-direction: column;
`

const LoginBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
`
const UsernameInput = styled.input`
width: 20vw;
border-radius: 5px;
margin-right: 15px;
border: none;
font-family: "Trebuchet MS", Tahoma, sans-serif;
`

const PasswordInput = styled.input`
width: 20vw;
border-radius: 5px;
margin-left: 15px;
border: none;
font-family: "Trebuchet MS", Tahoma, sans-serif;
`

const LoginButton = styled.button`
border: none;
border-radius: 5px;
margin-left: 20px;
font-family: "Trebuchet MS", Tahoma, sans-serif;
background-color: #008037;
`

const NewHereLink = styled.button`
border: none;
border-radius: 5px;
margin-left: 15px;
`
const ImgBox = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 50px;
`

const LoginImg = styled.img`
border: 2px solid black;
border-radius: 5px;
`

{/* <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && <div> {error} </div>}
      </form>
      <h3>New Here?</h3>
      <Link to="/signup"><button>Sign Up</button> </Link>
    </div> */}

export default AuthForm;
