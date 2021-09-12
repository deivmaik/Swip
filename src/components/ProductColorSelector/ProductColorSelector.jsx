import React from 'react'

import { tagColors, productDesc } from '../../data/Data'
import {
  Wrapper,
  Img,
  Container,
  Title,
  Desc,
  Colors,
} from './productColorSelector'

function ProductColorSelector() {
  const displayColor = tagColors.map((color, index) => (
    <Wrapper key={color.id}>
      <Img src={color.img} alt={color.name} width='50' />
      {/* <div style={{ color: color.color }}>{color.color}</div> */}
    </Wrapper>
  ))

  return (
    <Container>
      <Title>{productDesc.title}</Title>
      <Desc>{productDesc.subtitle}</Desc>
      <Colors>{displayColor}</Colors>
    </Container>
  )
}

export default ProductColorSelector
