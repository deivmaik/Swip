import React from "react";

import { howItWorks } from "../../data/Data";

import { Wrapper, Container, Title, Subtitle } from "./sideContent.styles";

const SideContent = () => {
  return (
    <Wrapper>
      <Title>{howItWorks.title}</Title>
      <Subtitle>{howItWorks.text}</Subtitle>
    </Wrapper>
  );
};

export default SideContent;
