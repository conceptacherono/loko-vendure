import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const About = () => {
  return (
    <Container>
      <h1>About LokoStore</h1>
      <p>We are committed to bringing you quality products at great prices.</p>
    </Container>
  );
};

export default About;
