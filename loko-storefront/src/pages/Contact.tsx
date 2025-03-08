import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Contact = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <p>Email: support@lokostore.com</p>
      <p>Phone: +254 700 123 456</p>
    </Container>
  );
};

export default Contact;
