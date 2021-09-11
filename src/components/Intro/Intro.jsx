import React from 'react'
import CTA from '../CTA/CTA'

import { Wrapper, Title, Desc } from './intro.styles'

// This function has information from data.js inside the data folder
function Intro({ title, subtitle }) {
  const formattedDesc = subtitle.replace('...', '\n')
  // `white-space: pre-line` in css is required to make the line break
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Desc>{formattedDesc}</Desc>
      <CTA />
    </Wrapper>
  )
}

export default Intro
