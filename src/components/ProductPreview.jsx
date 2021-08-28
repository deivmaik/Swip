import React from 'react'
import Preview from '../png/preview.png'

import { 
    Wrapper,
    Img,
    Button
 } from './styles/productPreview.styles'

const ProductPreview = () => {
    return (
        <Wrapper>
            <Img src={Preview} alt=''/>
            <Button>70Bs | Ordena el tuyo ahora</Button>
        </Wrapper>
    )
}

export default ProductPreview
