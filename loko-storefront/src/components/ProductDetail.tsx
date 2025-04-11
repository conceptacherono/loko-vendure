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
      slug
      featuredAsset {
        preview
      }
      variants {
        id
        name
        price
      }
    }
  }
`;

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { slug },
  });

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product: {error.message}</p>;

  const product = data.product;
  const firstVariant = product.variants?.[0];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{product.name}</h1>
      {product.featuredAsset && (
        <img
          src={product.featuredAsset.preview}
          alt={product.name}
          style={{ width: "200px", marginBottom: "20px" }}
        />
      )}
      <p>{product.description}</p>
      {firstVariant ? (
        <p>Price: ${(firstVariant.price / 100).toFixed(2)}</p>
      ) : (
        <p>No price info available</p>
      )}

      <button
        onClick={() =>
          addToCart({
            id: firstVariant.id,
            name: product.name,
            slug: product.slug,
            price: firstVariant.price,
            image: product.featuredAsset?.preview,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
