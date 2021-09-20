import React from 'react'
import FaqCard from './FaqCard'
import { Link } from 'react-router-dom'
import { Wrapper, Text, End } from './faq.styles'
import { faq } from '../../data/Data'

import { openWhatsapp } from '../../helpers/functions'

function FAQ() {
  return (
    <Wrapper>
      <Text>{faq.title}</Text>
      {FaqCard}
      <Link onClick={() => openWhatsapp()}>
        <End>{faq.end}contactanos haciendo clic aqui.</End>
      </Link>
    </Wrapper>
  )
}

export default FAQ
