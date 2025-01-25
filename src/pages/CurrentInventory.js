
import React from "react";
import styled from "styled-components";
import { getFeaturedCards } from "../data/CardPool";

const InventoryContainer = styled.div`
  padding: 20px;
  background-color: #000;
  min-height: 100vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  aspect-ratio: 1;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #f5f5f5;
`;

const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin: 20px 0;
`;

const CurrentInventory = () => {
  const cards = getFeaturedCards();

  return (
    <InventoryContainer>
      <Title>Current Inventory</Title>
      <GridContainer>
        {cards.map((card) => (
          <Card key={card.id}>
            <CardImage src={card.image} alt={card.title} />
            <CardInfo>
              <h3>{card.title}</h3>
            </CardInfo>
          </Card>
        ))}
      </GridContainer>
    </InventoryContainer>
  );
};

export default CurrentInventory;
