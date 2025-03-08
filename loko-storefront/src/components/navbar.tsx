import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

const NavbarContainer = styled.nav`
  background-color:rgba(31, 156, 63, 0.91); /* Jungle Green */
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled(FiShoppingCart)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>LokoStore</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
      <NavLinks>
        <NavLink to="/cart">
          <CartIcon />
        </NavLink>
        <NavLink to="/login">Login</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
