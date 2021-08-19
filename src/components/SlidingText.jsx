import React from 'react'
import { Wrapper,SliderText } from './styles/sliderText.styles'

// This function has information from data.js inside the data folder
function SlidingText ({
    message
  }) {
    return (
        <Wrapper>
            <SliderText>{message.toUpperCase()}</SliderText>
        </Wrapper>
    )
}

export default SlidingText
