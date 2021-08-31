import React from "react";

import { swips } from "../../data/Data";

import {
  SwipWrapper,
  Img,
  Text,
  Wrapper,
  Container,
  Title,
} from "./productSelector.styles";

function ProductSelector() {
  const displaySwips = swips.map((swip, index) => (
    <SwipWrapper key={swip.id}>
      <Img src={swip.img} alt={swip.name} width="200" />
      <Text>{swip.name}</Text>
    </SwipWrapper>
  ));

  return (
    <Wrapper>
      <Title>Selecciona tu swip</Title>
      <Container> {displaySwips}</Container>
    </Wrapper>
  );
}

export default ProductSelector;
