import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../svg/swiplogo.svg'
import SocialMedia from './SocialMedia'

import { HiOutlineMail } from 'react-icons/hi'
import { RiWhatsappLine } from 'react-icons/ri'

import {
    Wrapper,
    LogoContainer,
    Title,
    ContactContainer,
    Text
   } from './styles/contact.styles';

// This function has information from data.js inside the data folder
function Contact ({
    email,
    whatsapp
  }) {
    return (
        <Wrapper>
            <LogoContainer to='/'>
                <Logo fill='white'/>
            </LogoContainer> 
            {/* It could be empty brackets without the Fragment, it's just there for semantic purposes */}
            <Fragment>
                <Title>Contacto</Title>
                <Link to='#' >
                    <Text><HiOutlineMail/>{email.toLowerCase()}</Text>
                </Link>
                <Link to='#'>
                    <Text><RiWhatsappLine/>{whatsapp.toLowerCase()}</Text>
                </Link>
            </Fragment>
            <SocialMedia/>
            <Fragment>
                <Title>Legal</Title>
                <Link to='#' >
                    <Text>Terminos de uso</Text>
                </Link><Link to='#' >
                    <Text>Politicas de privacidad</Text>
                </Link>
            </Fragment>
        </Wrapper>
    )
}

export default Contact
