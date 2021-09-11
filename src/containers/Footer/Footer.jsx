import React, { Component } from 'react'
import Contact from '../../components/Contact/Contact'
import FAQ from '../../components/FAQ/FAQ'
import SlidingText from '../../components/SlidingText/SlidingText'

import { Wrapper, Container, GridStart, GridEnd, MadeIn } from './footer.styles'

import { SliderText, faq, ContactInfo } from '../../data/Data'

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <FAQ {...faq} />
          <Contact {...ContactInfo} />
        </Container>
        <MadeIn>Hecho con &#10084;&#65039; en Bolivia</MadeIn>
      </Wrapper>
    )
  }
}
