import React , { Component } from 'react'
import Intro from '../components/Intro'
import Product from '../components/Product'

import { HeroDesc} from '../data/Data'

import { 
  Container,
   Wrapper 
  } from './styles/hero.styles'

export default class Hero extends Component {

    render() {
       let width = window.innerWidth;
       if (width > 768) {
         return (
           <Wrapper >
                <Container>
                  {/* Calling HeroDesc from Data.js here helps send the data to the components */}
                    <Intro {...HeroDesc}/>
                    <Product/>
                </Container>
           </Wrapper>
         );
       } else {
         return (
           <Wrapper>
             <Container>
              <Intro {...HeroDesc}/>
             </Container>
           </Wrapper>
         );
       }
    }
  
  }
