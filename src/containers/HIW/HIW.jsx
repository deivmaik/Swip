import React from "react";
import SideContent from "../../components/SideContent/SideContent";
import Instructions from "../../components/Instructions/Instructions";
import Video from "../../components/Video/Video";

import { Wrapper } from "./hiw.styles";

const HIW = () => {

  return (
    <Wrapper>
      <SideContent  />
      <Instructions />
      <Video  />
    </Wrapper>
  );
};

export default HIW;
