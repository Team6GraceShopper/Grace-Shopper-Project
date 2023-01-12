import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    //home page
    <div>
      <h3>Welcome, {username}</h3>
      <h1>Home page</h1>
      
      
    </div>
  );
};

export default Home;
