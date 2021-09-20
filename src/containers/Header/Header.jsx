import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/svg/swiplogo.svg'

import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/Button/Button'
import { openWhatsapp } from '../../helpers/functions'

import { Wrapper, NavLink, NavBtn } from './header.styles'

const Header = () => {
  return (
    <Wrapper>
      <Router>
        <NavLink to='/'>
          <Logo fill='black' />
        </NavLink>
      </Router>
      <Navbar />
      <NavBtn onClick={() => openWhatsapp()}>
        <Button />
      </NavBtn>
    </Wrapper>
  )
}

export default Header
