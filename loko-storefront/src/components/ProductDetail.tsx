// src/components/ProductDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useCart } from "../context/CartContext";

const GET_PRODUCT_DETAIL = gql`
  query getProductDetail($slug: String!) {
    product(slug: $slug) {
      id
      name
      description
      price
    }
  }
`;

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart, cart } = useCart();
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { slug },
  });

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product: {error.message}</p>;

  return (
    <div>
      <h1>{data.product.name}</h1>
      <p>{data.product.description}</p>
      <p>${data.product.price}</p>
      <button onClick={() => addToCart(data.product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
