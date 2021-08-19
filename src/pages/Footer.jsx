import React, { Component } from 'react'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import SlidingText from '../components/SlidingText'

import { Wrapper } from './styles/footer.styles'

import { SliderText, ContactInfo } from '../data/Data'

export default class Footer extends Component {

    render() {
        return (
            <Wrapper>
                {/* Calling SliderText from Data.js here helps send the data to the component */}
                <SlidingText {...SliderText}/>
                {/* <FAQ/> */}
                <Contact {...ContactInfo}/>
                <p>Hecho con &#10084;&#65039; en Bolivia</p>
            </Wrapper>
        )
    }
  
  }