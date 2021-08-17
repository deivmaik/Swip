import React from 'react'
import { ReactComponent as Logo} from '../svg/swiplogo.svg'

import {
   Wrapper,
   NavLink,
   LogoWrapper,
   NavBtn,
  } from './styles/header.styles';
import Navbar from './Navbar';
import  Button  from './Button';

const Header = () => {
    return (
        <Wrapper>
            <NavLink to='/'>
                <Logo/>
            </NavLink> 
            <Navbar/>
            <NavBtn>
                <Button/>
            </NavBtn>
        </Wrapper>
    )
}

export default Header
