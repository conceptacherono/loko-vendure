import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/getProducts";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const ShopContainer = styled.div`
  padding: 20px;
`;

// const ProductCard = styled.div`
//   border: 1px solid #ddd;
//   padding: 10px;
//   margin: 10px;
//   border-radius: 4px;
// `;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Shop = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    context: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });

  // For debugging:
  console.log("Fetched products:", data);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  return (
    <ShopContainer>
      <h1>Shop</h1>
      <ProductGrid>
        {data.products && data.products.items.length > 0 ? (
          data.products.items.map((product: any) => (
            <ProductCard key={product.id} product={product} addToCart={() => {}} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ProductGrid>
    </ShopContainer>
  );
};

export default Shop;
