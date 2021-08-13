import React from 'react'
import CTA from './CTA'

import {
    Wrapper,
    Title,
    Desc,
   } from './styles/intro.styles';

const Intro = () => {
    return (
        <Wrapper>
            <Title>comparte todas tus redes sociales en un instante</Title>
            <Desc>Facebook, Instagram, Linkedin... 
                <br/>Lo que quieras, a un solo swip.</Desc>
            <CTA/>
        </Wrapper>
    )
}

export default Intro
