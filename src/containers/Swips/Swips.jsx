import React from 'react'
import ProductPreview from '../../components/ProductPreview/ProductPreview'
import ProductColorSelector from '../../components/ProductColorSelector/ProductColorSelector.jsx'
import ProductSelector from '../../components/ProductSelector/ProductSelector'

import { Wrapper } from './swips.styles'

const Swips = () => {
  return (
    <Wrapper>
      {/* <ProductPreview />
      <ProductColorSelector /> */}
      <ProductSelector />
    </Wrapper>
  )
}

export default Swips
