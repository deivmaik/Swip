import React from 'react'
import ProductPreview from '../components/ProductPreview'
import ProductSelector from '../components/ProductSelector'
import { Wrapper } from './styles/swips.styles'

const Swips = () => {
    return (
        <Wrapper>
            <ProductPreview/>
            <ProductSelector/>
        </Wrapper>
    )
}

export default Swips
