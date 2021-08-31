import React from "react";
import File from "../../assets/gif/video.gif";

import { Wrapper, GIF } from "./video.styles";

const Video = () => {
  return (
    <Wrapper>
      <GIF src={File} alt="video" />
    </Wrapper>
  );
};

export default Video;
