import React from "react";
import { useSelector } from "react-redux";
import Slider from "../components/Slider.jsx";
import Categories from "../components/Categories.jsx";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    //home page
    <div>
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
