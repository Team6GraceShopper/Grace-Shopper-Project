import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function SingleProduct() {
  const [data, setData] = useState([]);
  const productId = useParams().productId;

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8080/api/product/${productId}`);
      setData(result.data);
    };
    fetchData();
  }, []);
  

  return (
    <ProductContainer>
      <h1>{data.name}</h1>
      {/* <img src={data.imgUrl} alt={data.name} /> */}
      <p>Price: {data.price}</p>
      <p>{data.description}</p>
      <p>In stock: {data.inStock ? "Yes" : "No"}</p>
      <p>Quantity: {data.quantity}</p>
      <p>Category: {data.category}</p>
      <p>Rating: {data.rating}</p>
    </ProductContainer>
  );
}

export default SingleProduct;



// import styled from "styled-components"

// const Body = styled.div`
// background-color: #1F2041;
// color: gold;
// text-shadow: 3px 3px 2px black;
// display: flex;
// flex-direction: column;
// `
// const Title = styled.h1`
// margin: 20px;
// `

// const RightBlock = styled.div`
// background-color: #53546F;
// margin: 20px;
// margin-top: 0px;
// margin-bottom: 0px;
// padding: 20px;
// display: flex;
// flex-direction: column;
// position: relative;
// `;
// const DescriptionBlock = styled.div`
// color: aqua;
// `
// const PictureAndRightBlock = styled.div`
// display: flex;
// flex-direction: row;
// `;
// const Img = styled.img`
// width: 40vw;
// border-radius: 10px;
// `
// const AddToCart = styled.button`
// background-color: #53546F;
// width: 15vw;
// height: 3vw;
// font-size: 2vw;
// position: absolute;
// bottom: 20px;
// right: 20px;
// border: 2px solid gold;
// color: gold;
// `
// const Rating = styled.div`
// width: 20vw;
// align-self: center;
// display: flex;
// flex-direction: column;
// justify-items: center;
// align-items: center;
// margin: 30px;
// padding: 10px;
// gap: -100px;
// text-shadow: 5px 5px 2px black;
// `
// const Stars = styled.div`
// margin-bottom: 10px;
// font-size: 3rem;