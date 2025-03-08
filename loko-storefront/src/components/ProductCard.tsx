// src/components/ProductCard.tsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 10px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.slug}`}>
        <Button>View Details</Button>
      </Link>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
