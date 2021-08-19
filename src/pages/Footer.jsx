import React, { Component } from 'react'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import SlidingText from '../components/SlidingText'

import { 
    Wrapper,
    Container,
    GridStart,
    GridEnd,
    MadeIn,
 } from './styles/footer.styles'

import { 
    SliderText,
     FAQText, 
     ContactInfo
    } from '../data/Data'

export default class Footer extends Component {

    render() {
        return (
            <Wrapper>
                {/* Calling SliderText from Data.js here helps send the data to the component */}
                <SlidingText  {...SliderText}/>
                <Container>
                    {/* Not the best way to do this, but it works for now. */}
                    <GridStart><FAQ {...FAQText}/></GridStart>                   
                    <GridEnd><Contact {...ContactInfo}/></GridEnd>
                </Container>
                <MadeIn>Hecho con &#10084;&#65039; en Bolivia</MadeIn>
            </Wrapper>
        )
    }
  
  }