// src/components/ProductDetail.tsx (updated with add to cart functionality)
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

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
  const [cart, setCart] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { slug },
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product: {error.message}</p>;

  return (
    <div>
      <h1>{data.product.name}</h1>
      <p>{data.product.description}</p>
      <p>${data.product.price}</p>
      <button onClick={() => addToCart(data.product)}>Add to Cart</button>
      <div>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
