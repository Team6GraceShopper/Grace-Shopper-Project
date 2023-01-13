import React from 'react';
import styled from 'styled-components'
import data from '../../data';
// import styled from "styled-components";

function AllProducts() {
  return (
    <div>
      <h1>Our Products!</h1>
      <div className="products">
      {data.products.map((product) => (
        <div className="product" key={product.slug}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default AllProducts
