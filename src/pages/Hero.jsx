import React , { Component } from 'react'
import Intro from '../components/Intro'
import Product from '../components/Product'
import { Container, Wrapper } from './styles/hero.styles'

export default class Hero extends Component {

    render() {
       let width = window.innerWidth;
       if (width > 768) {
         return (
           <Wrapper >
                <Container>
                    <Intro/>
                    <Product/>
                </Container>
           </Wrapper>
         );
       } else {
         return (
           <Wrapper>
               <Container>
                    <Intro/>
               </Container>
           </Wrapper>
         );
       }
    }
  
  }
