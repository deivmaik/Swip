import React, { Component } from "react";
import Contact from "../../components/Contact/Contact";
import FAQ from "../../components/FAQ/FAQ";
import SlidingText from "../../components/SlidingText/SlidingText";

import {
  Wrapper,
  Container,
  GridStart,
  GridEnd,
  MadeIn,
} from "./footer.styles";

import { SliderText, FAQText, ContactInfo } from "../../data/Data";

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        {/* Calling SliderText from Data.js here helps send the data to the component */}
        <SlidingText {...SliderText} />
        <Container>
          {/* Not the best way to do this, but it works for now. */}
          <GridStart>
            <FAQ {...FAQText} />
          </GridStart>
          <GridEnd>
            <Contact {...ContactInfo} />
          </GridEnd>
        </Container>
        <MadeIn>Hecho con &#10084;&#65039; en Bolivia</MadeIn>
      </Wrapper>
    );
  }
}
