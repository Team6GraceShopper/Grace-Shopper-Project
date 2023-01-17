import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  padding: 1em;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px #ccc;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 0.5em 0;
`;

const ProductTitle = styled.h1`
  font-size: 2em;
  margin: 0.5em 0;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0.5em 0;
`;

const ProductDescription = styled.p`
  font-size: 1.2em;
  margin: 0.5em 0;
`;

const ProductStock = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0.5em 0;
`;

const ProductQuantity = styled.p`
  font-size: 1.2em;
  margin: 0.5em 0;
`;

const ProductCategory = styled.p`
  font-size: 1.2em;
  margin: 0.5em 0;
`;

const ProductRating = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0.5em 0;
`;

function SingleProduct() {
  const [data, setData] = useState([]);
  const {productId} = useParams();

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
    <ProductContainer>
      <ProductImage src={data.imgUrl} alt={data.name} />
      <ProductTitle>{data.name}</ProductTitle>
      <ProductPrice>Price: {data.price}</ProductPrice>
      <ProductDescription>{data.description}</ProductDescription>
      <ProductStock>In stock: {data.inStock ? "Yes" : "No"}</ProductStock>
      <ProductQuantity>Quantity: {data.quantity}</ProductQuantity>
      <ProductCategory>Category: {data.category}</ProductCategory>
      <ProductRating>Rating: {data.rating}</ProductRating>
    </ProductContainer>
  );
}

export default SingleProduct;