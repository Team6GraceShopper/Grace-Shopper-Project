import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
    
      <nav>
      <h1>Walmars Logo Here</h1>
      <div>
      <input></input>
      <SearchIcon />
    </div>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login/SignUp</Link>
            {/* <Link to="/signup">Sign Up</Link> */}
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
