import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 My Store. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
