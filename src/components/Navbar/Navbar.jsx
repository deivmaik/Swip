import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { links } from '../../data/Data'
import { NavLink, NavMenu } from './navbar.styles'

const Navbar = () => {
  return (
    <NavMenu>
      {links.map((link) => {
        return (
          <Router>
            <NavLink to={link.url} key={link.id}>
              {link.text}
            </NavLink>
          </Router>
        )
      })}
    </NavMenu>
  )
}

export default Navbar
