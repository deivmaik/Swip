import React from 'react'
import ProductPreview from '../../components/ProductPreview/ProductPreview'
import ProductColorSelector from '../../components/ProductColorSelector/ProductColorSelector.jsx'

import { Wrapper } from './swips.styles'

const Swips = () => {
  return (
    <Wrapper>
      <ProductPreview />
      <ProductColorSelector />
    </Wrapper>
  )
}

export default Swips
