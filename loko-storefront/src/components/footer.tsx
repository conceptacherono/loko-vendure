import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 0.9rem;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 My Store. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
