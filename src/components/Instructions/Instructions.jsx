import React from "react";
import InstructionsCard from "../InstructionsCard/InstructionsCard";

import { Wrapper } from "./instructions.styles";

const Instructions = () => {
  return (
    <Wrapper>
      <InstructionsCard />
      <InstructionsCard />
      <InstructionsCard />
    </Wrapper>
  );
};

export default Instructions;
