import React from "react";
import About from "../components/About";
import How from "../components/How";
import Contact from "../components/Contact";
import styled from "styled-components";

// Carousel Styled Component (placeholder for now)
const CarouselContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #000;
  color: white;
  text-align: center;
`;

const Carousel = () => {
  return (
    <CarouselContainer>
      <h2>Carousel Placeholder</h2>
      <p>Replace this with your carousel implementation.</p>
    </CarouselContainer>
  );
};

const PastInventory = () => {
  return (
    <div>
      <About />
      <How />
      <Carousel />
      <Contact />
    </div>
  );
};

export default PastInventory;
