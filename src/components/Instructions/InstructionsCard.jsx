import React from "react";
import { instructions } from "../../data/Data";

import {
  Card,
  Container,
  Number,
  Title,
  Subtitle,
} from "./instructionsCard.styles";

const InstructionsCard = instructions.map((instructions, id) => (
  <Card key={instructions.number + id}>
    <Container>
      <Number>{instructions.number}</Number>
    </Container>
    <Title>{instructions.title}</Title>
    <Subtitle>{instructions.desc}</Subtitle>
  </Card>
));

export default InstructionsCard;
