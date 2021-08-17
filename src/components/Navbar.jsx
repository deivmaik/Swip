import React from 'react'
import { ReactComponent as Logo} from '../svg/swiplogo.svg'

import {
    NavLink,
    NavMenu,
  } from './styles/navbar.styles';

const Navbar = () => {
    return (
        <NavMenu>
                <NavLink to='/comofunciona'> ¿como funciona?</NavLink>
                <NavLink to='/modelo'> modelos</NavLink>
                <NavLink to='/footer'> contacto</NavLink>
        </NavMenu>
    )
}

export default Navbar
