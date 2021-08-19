import React from 'react'
import { ReactComponent as Logo} from '../svg/swiplogo.svg'
import SocialMedia from './SocialMedia'


import { HiOutlineMail } from 'react-icons/hi'
import { RiWhatsappLine } from 'react-icons/ri'

import {
    Wrapper,
    NavLink,
    BasicInfo,
    BasicInfoText,
    Legal,
    LegalText
   } from './styles/contact.styles';

// This function has information from data.js inside the data folder
function Contact ({
    email,
    whatsapp
  }) {
    return (
        <Wrapper>
            <NavLink to='/'>
                <Logo fill='white'/>
            </NavLink> 
            <BasicInfo>
                <BasicInfoText><HiOutlineMail/>{email.toLowerCase()}</BasicInfoText>
                <BasicInfoText><RiWhatsappLine/>{whatsapp.toLowerCase()}</BasicInfoText>
            </BasicInfo>
            <SocialMedia/>
            <Legal>
                <LegalText>Terminos de uso</LegalText>
                <LegalText>Politicas de privacidad</LegalText>
            </Legal>
        </Wrapper>
    )
}

export default Contact
