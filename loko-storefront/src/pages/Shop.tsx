import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { useEffect, useState } from 'react';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shop-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            products {
              items {
                id
                name
                description
                variants {
                  id
                  price
                }
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data); // ✅ Logging products to console
        if (data.data && data.data.products) {
          setProducts(data.data.products.items);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {product.variants.length > 0 ? (
                <p>Price: {product.variants[0].price / 100} USD</p>
              ) : (
                <p>No price available</p>
              )}
            </li>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
    </div>
  );
};

export default Shop;