import React from "react";
import Directory from "../components/Directory";
import styled from "styled-components";

function Homepage() {
  return (
    <Container>
      <Directory />
    </Container>
  );
}

export default Homepage;

const Container = styled.div`
  display: flex;
  padding: 20px 80px;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px 40px;
  }
`;
