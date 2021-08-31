import React from "react";

import {
  Card,
  Container,
  Number,
  Title,
  Subtitle,
} from "./instructionsCard.styles";

const InstructionsCard = () => {
  return (
    <Card>
      <Container>
        <Number>1</Number>
      </Container>
      <Title>Crea tu perfil de usuario</Title>
      <Subtitle>Elige un nombre de usuario unico que te represente. </Subtitle>
    </Card>
  );
};

export default InstructionsCard;
