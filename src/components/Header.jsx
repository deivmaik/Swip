import React from 'react'
import { ReactComponent as Logo} from '../svg/swiplogo.svg'

import {
   Wrapper,
   Menu,
   LogoWrapper,
   Styledli,
   CtaWrapper,
   Cta
  } from './styles/header.styles';

const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo/>
            </LogoWrapper>
            <Menu>
                <Styledli>¿como funciona?</Styledli>
                <Styledli>compra un swip</Styledli>
                <Styledli>contacto</Styledli>
            </Menu>
            <CtaWrapper>
                <Cta>Ingresa a tu swip</Cta>
            </CtaWrapper>
        </Wrapper>
    )
}

export default Header
