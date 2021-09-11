import React, { Component } from 'react'
import Intro from '../../components/Intro/Intro'
import Product from '../../components/Product/Product'

import { HeroDesc } from '../../data/Data'

import { Wrapper } from './hero.styles'

export default class Hero extends Component {
  render() {
    return (
      <Wrapper>
        {/* Calling HeroDesc from Data.js here helps send the data to the components */}
        <Intro {...HeroDesc} />
        <Product />
      </Wrapper>
    )
  }
}
