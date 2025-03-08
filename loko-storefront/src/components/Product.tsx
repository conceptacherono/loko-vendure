// src/components/Products.tsx
import React from "react";
import { gql, useQuery } from "@apollo/client";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      price
      slug
    }
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const { addToCart } = useCart();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
