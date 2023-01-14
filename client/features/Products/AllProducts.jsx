import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import Product from "./Product.jsx";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AllProducts = () => {
  const [state, setState] = useState([]);
  const getData = async () => {
    let response = await Axios.get("http://localhost:8080/api/product");
    let data = response.data;
    setState(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      {state.map((product) => (
        <Product key={product.id}>
          <img src={product.imgUrl} alt={product.name} />
        </Product>
      ))}
    </Container>
  );
};

export default AllProducts;
