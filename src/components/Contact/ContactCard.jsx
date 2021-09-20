import React from 'react'
import { Link } from 'react-router-dom'

import { HiOutlineMail } from 'react-icons/hi'
import { RiWhatsappLine } from 'react-icons/ri'

import { contactInfo } from '../../data/Data'

import { Title, Text } from './contact.styles'

import { openWhatsapp } from '../../helpers/functions'

function ContactCard() {
  return (
    <>
      <Title>{contactInfo.title}</Title>
      <Link to='#'>
        <Text>
          <HiOutlineMail />
          {contactInfo.email.toLowerCase()}
        </Text>
      </Link>
      <Link to='#'>
        <Text onClick={() => openWhatsapp()}>
          <RiWhatsappLine />
          {contactInfo.whatsapp.toLowerCase()}
        </Text>
      </Link>
    </>
  )
}

export default ContactCard
