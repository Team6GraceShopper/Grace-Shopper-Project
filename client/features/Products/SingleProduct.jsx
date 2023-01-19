import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductPrice = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 20px;
`;

const ProductStock = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 20px;
`;

const ProductQuantity = styled.p`
  font-size: 1.2em;
  margin: 20px;
`;

const StatsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductCategory = styled.p`
  font-size: 1.2em;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  background-color: #1f2041;
  color: gold;
  text-shadow: 3px 3px 2px black;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  margin: 20px;
`;

const RightBlock = styled.div`
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 47vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #53546f;
`;
const DescriptionBlock = styled.div`
  background-color: #53546f;
  color: aqua;
  margin: 20px;
`;
const PictureAndRightBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 47vw;
  border-radius: 10px;
  margin: 0 20px;
`;
const AddToCart = styled.button`
  background-color: #53546f;
  width: 15vw;
  height: 3vw;
  font-size: 2vw;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: 2px solid gold;
  color: gold;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: gold;
    color: #53546f;
  }
`;
const Rating = styled.div`
  width: 20vw;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 30px;
  padding: 10px;
  gap: -100px;
  text-shadow: 5px 5px 2px black;
`;
const Stars = styled.div`
  margin-bottom: 10px;
  font-size: 2rem;
`;

const BackToAllProducts = styled.button`
  background-color: #53546f;
  width: 15vw;
  height: 5vw;
  font-size: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gold;
  color: gold;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: gold;
    color: #53546f;
  }
`;

function SingleProduct() {
  const [data, setData] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/product/${productId}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Body>
      <ProductCategory>All Products / {data.category}</ProductCategory>
      <PictureAndRightBlock>
        <Img src={"/" + data.imgUrl} alt={data.name}></Img>
        <RightBlock>
          <Title>{data.name}</Title>
          <Rating>
            <h3>Rating: {data.rating}/10</h3>
            <Stars>
              <span>{data.rating >= 1 ? "★" : "☆"}</span>
              <span>{data.rating >= 2 ? "★" : "☆"}</span>
              <span>{data.rating >= 3 ? "★" : "☆"}</span>
              <span>{data.rating >= 4 ? "★" : "☆"}</span>
              <span>{data.rating >= 5 ? "★" : "☆"}</span>
              <span>{data.rating >= 6 ? "★" : "☆"}</span>
              <span>{data.rating >= 7 ? "★" : "☆"}</span>
              <span>{data.rating >= 8 ? "★" : "☆"}</span>
              <span>{data.rating >= 9 ? "★" : "☆"}</span>
              <span>{data.rating >= 10 ? "★" : "☆"}</span>
            </Stars>
          </Rating>
          <StatsBlock>
            <ProductStock>
              {data.inStock ? "In Stock" : "Out of Stock"}
            </ProductStock>
            <ProductPrice>Price: ⬦{data.price}</ProductPrice>
            <ProductQuantity>Quantity: {data.quantity}</ProductQuantity>
            <AddToCart>Add To Cart</AddToCart>
          </StatsBlock>
        </RightBlock>
      </PictureAndRightBlock>
      <DescriptionBlock>
        <h3>Product Description</h3>
        <p>{data.description}</p>
        <BackToAllProducts>
          <Link to="/allproducts">Back To All Products</Link>
        </BackToAllProducts>
      </DescriptionBlock>
    </Body>
  );
}

export default SingleProduct;
