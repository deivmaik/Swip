import React from 'react'
import { Link } from 'react-router-dom'

import { legal } from '../../data/Data'

import { Title, Text } from '../Contact/contact.styles'
function Legal() {
  return (
    <>
      <Title>{legal.title}</Title>
      <Link to='#'>
        <Text>{legal.terms}</Text>
      </Link>
      <Link to='#'>
        <Text>{legal.privacy}</Text>
      </Link>
    </>
  )
}

export default Legal
