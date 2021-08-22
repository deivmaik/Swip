import React from 'react'
import InstructionsCard from './InstructionsCard'

import {Wrapper} from './styles/instructions.styles'

const Instructions = () => {
    return (
        <Wrapper>
            <InstructionsCard/>
            <InstructionsCard/>
            <InstructionsCard/>
        </Wrapper>
    )
}

export default Instructions
