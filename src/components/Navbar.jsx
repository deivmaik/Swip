import React from 'react'
import { ReactComponent as Logo} from '../svg/swiplogo.svg'


import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './styles/navbar.styles';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'>
                <h1>swip</h1>
            </NavLink> 
            <Bars/>
            <NavMenu>
                <NavLink to='/como-funciona' activeStyle>
                    ¿como funciona?
                </NavLink>
                <NavLink to='/modelos' activeStyle>
                    modelos
                </NavLink>
                <NavLink to='/contacto' activeStyle>
                    contacto
                </NavLink>
                <NavBtn>
                    <NavBtnLink to='/comprar'>
                        comprar
                    </NavBtnLink>
                </NavBtn>  
            </NavMenu>
             
        </Nav>   
        </>
    )
}

export default Navbar
