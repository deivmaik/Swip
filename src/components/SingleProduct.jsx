import React from 'react'
import pinkSwip from '../png/pinkSwip.png'

import {
    Img,
    Text
} from './styles/singleProduct.styles'

const SingleProduct = () => {
    return (
        <div>
        <Img src={pinkSwip} alt=''/>
        <Text>Rosa</Text> 
        </div>
    )
}

export default SingleProduct
