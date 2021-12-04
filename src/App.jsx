import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Carousel contents={[...Array(10)]} />
    </Container>
  );
}

export default App;
