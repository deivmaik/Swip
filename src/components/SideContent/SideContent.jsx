import React from 'react'

import { howItWorks } from '../../data/Data'

import { Wrapper, Title, Subtitle } from './sideContent.styles'

function SideContent() {
  return (
    <Wrapper>
      <Title>{howItWorks.title}</Title>
      <Subtitle>{howItWorks.text}</Subtitle>
    </Wrapper>
  )
}

export default SideContent
