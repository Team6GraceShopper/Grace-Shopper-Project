import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem.jsx";

//dummy data for categories
const categories = [
  {
    id: 1,
    img: "productImages/Petty_realistic_Philadelphia_Eagles_Ironman_suit.png",
    title: "Mech Suits",
  },
  {
    id: 2,
    img: "productImages/intelligent_production_line_ultrarealistic.png",
    title: "Factory Equipments",
  },
  {
    id: 3,
    img: "productImages/mech.png",
    title: "Mech Robots",
  },
  {
    id: 4,
    img: "productImages/spaceship1.png",
    title: "Spaceships",
  },
];

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categories;
