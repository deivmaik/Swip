import React from 'react'
import { openWhatsapp } from '../../helpers/functions'

import { tagColors, productDesc } from '../../data/Data'
import {
  Wrapper,
  Img,
  Container,
  Title,
  Desc,
  Colors,
  Button,
} from './productSelector.styles'

function ProductSelector() {
  const displayColor = tagColors.map((color, index) => (
    <Wrapper onClick={() => openWhatsapp()} key={color.id}>
      <Img src={color.preview} alt={color.name} width='50' />
      <Button> {color.price} | comprar</Button>
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

export default ProductSelector
