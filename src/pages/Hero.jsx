import React from 'react'
import Intro from '../components/Intro'
import Product from '../components/Product'
import { Container, Wrapper } from './styles/hero.styles'

const Hero = () => {

    return (
        <Wrapper>
            <Container>
                <Intro/>
                <Product/>
            </Container>
        </Wrapper>
    )
}

export default Hero
