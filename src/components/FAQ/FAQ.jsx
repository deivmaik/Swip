import React from 'react'
import FaqCard from './FaqCard'
import { Link } from 'react-router-dom'
import { Wrapper, Text, End } from './faq.styles'
import { faq } from '../../data/Data'

function FAQ({ title, end }) {
  return (
    <Wrapper>
      <Text>{faq.title}</Text>
      {FaqCard}
      <Link to='/'>
        <End>{faq.end}Haz click aqui</End>
      </Link>
    </Wrapper>
  )
}

export default FAQ
