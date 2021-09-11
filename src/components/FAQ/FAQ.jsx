import React from 'react'
import FaqCard from './FaqCard'
import { Link } from 'react-router-dom'
import { Wrapper, Text, End } from './faq.styles'

function FAQ({ title, end }) {
  return (
    <Wrapper>
      <Text>{title}</Text>
      {FaqCard}
      <Link>
        <End>{end}Haz click aqui</End>
      </Link>
    </Wrapper>
  )
}

export default FAQ
