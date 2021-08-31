import React from "react";
import CTA from "../CTA/CTA";

import { Wrapper, Title, Desc } from "./intro.styles";

// This function has information from data.js inside the data folder
function Intro({ title, subtitle, subtitleTwo }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Desc>
        {subtitle}
        <br />
        {subtitleTwo}
      </Desc>
      <CTA />
    </Wrapper>
  );
}

export default Intro;
