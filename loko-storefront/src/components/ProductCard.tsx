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
  max-width: 300px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
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
      {product.featuredAsset?.preview && (
        <ProductImage
          src={product.featuredAsset.preview}
          alt={product.name}
        />
      )}
      <h3>{product.name}</h3>
      <p>${(product.variants?.[0]?.price / 100).toFixed(2) || "N/A"}</p>
      <Link to={`/product/${product.slug}`}>
        <Button>View Details</Button>
      </Link>
    </Card>
  );
};

export default ProductCard;
