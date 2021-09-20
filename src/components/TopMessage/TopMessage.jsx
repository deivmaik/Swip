import React from 'react'

import { Wrapper, Text, Span } from './topMessage.styles'

import { openWhatsapp } from '../../helpers/functions'

function TopMessage({ text, span }) {
  return (
    <Wrapper onClick={() => openWhatsapp()}>
      <Text>
        {text}
        <Span>{span}</Span>
      </Text>
    </Wrapper>
  )
}

export default TopMessage
