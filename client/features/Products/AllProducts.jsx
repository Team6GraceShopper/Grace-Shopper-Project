import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import React from "react";

function AllProducts() {
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
    <div>
      <h1>Our Products!</h1>
      <div className="products">
        {state.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.imgUrl} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.quantity}</p>
            <p>{product.category}</p>
            <p>{product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
