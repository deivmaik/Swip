import React from 'react'
import { questions } from '../../data/Data'

import { Wrapper, Question, Answer } from './faqCard.styles'

const FaqCard = questions.map((item, index) => (
  <Wrapper key={index}>
    <Question>{item.q}</Question>
    <Answer>{item.r}</Answer>
  </Wrapper>
))

export default FaqCard
