import React from 'react'
import {
  Wrapper,
  Title,
  Question,
  Answer
   } from './styles/faq.styles';

function FAQ ({
    title,
    q1,
    r1,
    q2,
    r2,
    q3,
    r3,
    end
  }) {
    return (
        <Wrapper>
        <Title>{title}</Title>
        <Question>{q1}</Question>
        <Answer>{r1}</Answer>
        <Question>{q2}</Question>
        <Answer>{r2}</Answer>
        <Question>{q3}</Question>
        <Answer>{r3}</Answer>
        <Question>{end}}</Question>
        </Wrapper>
    )
}

export default FAQ