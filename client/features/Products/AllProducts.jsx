import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToTheCart } from "../shop/cartSlice";
import { useSelector } from "react-redux";


const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  width: 300px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  z-index: 3;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  margin-left: 130px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Description = styled.p`
height: 1rem;
whit-space: no-wrap;
text-overflow: ellipsis;
overflow: hidden;
`

function AllProducts() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const userId = useSelector((state) => state.auth.me.id);

  const dispatch = useDispatch()

  const handleAddToCart= (e, userId, item, cartId) => {
    e.preventDefault();
    dispatch(addToTheCart(userId ,item , cartId))
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/product")
      .then((res) => setData(res.data))
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ProductContainer>
      {data.map((item) => (
        <ProductCard key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <img src={item.imgUrl} alt={item.name} />
          <Description>{item.description}</Description>
          <p>Rating: {item.rating}/10</p>

          <Link to={`/product/${item.id}`}>
            <Icon>
              <SearchOutlinedIcon />
              <p>Product Details</p>
            </Icon>
          </Link>
          <Link onClick={(item) => handleAddToCart(item.id)} to="/cart">
            <Icon>
              <ShoppingCartOutlinedIcon />
              <p>Add to Cart</p>
            </Icon>
          </Link>
        </ProductCard>
      ))}
    </ProductContainer>
  );
}

export default AllProducts;
