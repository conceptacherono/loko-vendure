// src/components/Products.tsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GET_PRODUCTS = gql`
  query {
    products {
      items {
        id
        name
        slug
        price
        imageUrl
      }
    }
  }
`;

const ProductListContainer = styled.div`
  padding: 20px;
`;

const ProductItem = styled.li`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    color: #0056b3;
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <ProductListContainer>
      <h1>Products</h1>
      <ul>
        {data.products.items.map((product: { id: string, name: string, slug: string, price: string, imageUrl: string }) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductDetails>
              <ProductLink to={`/product/${product.slug}`}>{product.name}</ProductLink>
              <p>${product.price}</p>
            </ProductDetails>
          </ProductItem>
        ))}
      </ul>
    </ProductListContainer>
  );
};

export default Products;
