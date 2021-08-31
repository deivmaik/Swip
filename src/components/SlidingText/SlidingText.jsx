import React from "react";
import { SliderText } from "./slidingText.styles";

// This function has information from data.js inside the data folder
function SlidingText({ message }) {
  return (
    <>
      <SliderText>{message.toUpperCase()}</SliderText>
    </>
  );
}

export default SlidingText;
