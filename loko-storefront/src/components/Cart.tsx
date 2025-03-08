import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
`;

const CartButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((product) => (
            <CartItem key={product.id}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
              <CartButton onClick={() => removeFromCart(product.id)}>Remove</CartButton>
            </CartItem>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
