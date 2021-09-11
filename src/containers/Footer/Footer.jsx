import React from 'react'
import Contact from '../../components/Contact/Contact'
import FAQ from '../../components/FAQ/FAQ'

import { Wrapper, Container, MadeIn } from './footer.styles'

function Footer() {
  return (
    <Wrapper>
      <Container>
        <FAQ />
        <Contact />
      </Container>
      <MadeIn>Hecho con &#10084;&#65039; en Bolivia</MadeIn>
    </Wrapper>
  )
}

export default Footer
