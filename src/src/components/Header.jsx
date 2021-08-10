import React from 'react'
import { ReactComponent as Logo} from '../svg/swiplogo.svg'

import {
   Wrapper,
   Menu,
   LogoWrapper,
  } from './styles/header.styles';

const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo/>
            </LogoWrapper>
            <Menu>
                <li>¿como funciona?</li>
                <li>compra un swip</li>
                <li>contacto</li>
                <li>Ingresa a tu swip</li>
            </Menu>
        </Wrapper>
    )
}

export default Header
