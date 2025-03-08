// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Products from "./components/Product";
import { CartProvider } from "./context/CartContext";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;;
`;

const HeroSection = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #1b4d3e, #2e8b57);
  color: white;
  padding: 60px 20px;
  width: 100%;
  border-radius: 8px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const ShopButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: #1b4d3e;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #ccc;
  }
`;

const App = () => {
  return (
    <CartProvider> {/* Wrap everything inside CartProvider */}
      <AppContainer>
        <Router>
          <Navbar />
          <MainContent>
            <Routes>
              <Route path="/" element={
                <HeroSection>
                <HeroTitle>Welcome to LokoStore</HeroTitle>
                <HeroSubtitle>Your one-stop shop for amazing products</HeroSubtitle>
                <ShopButton href="/shop">Start Shopping</ShopButton>
              </HeroSection>
                } 
                />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainContent>
          <Footer />
        </Router>
      </AppContainer>
    </CartProvider>
  );
};

export default App;
