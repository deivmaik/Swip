import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg/swiplogo.svg'
import { BrowserRouter as Router } from 'react-router-dom'

import ContactCard from './ContactCard'
import SocialMedia from '../SocialMedia/SocialMedia'
import Legal from '../Legal/Legal.jsx'

import { Wrapper, Redirect } from './contact.styles'

function Contact() {
  return (
    <Wrapper>
      <Router>
        <Redirect to='/'>
          <Logo fill='white' />
        </Redirect>
      </Router>
      <ContactCard />
      <SocialMedia />
      <Legal />
    </Wrapper>
  )
}

export default Contact
