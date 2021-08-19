import React from 'react'
import { ReactComponent as Logo} from '../svg/swiplogo.svg'
import Navbar from './Navbar';
import  Button  from './Button';

import {
   Wrapper,
   NavLink,
   NavBtn,
  } from './styles/header.styles';

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
