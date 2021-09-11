import React from 'react'
import { Link } from 'react-router-dom'

import { HiOutlineMail } from 'react-icons/hi'
import { RiWhatsappLine } from 'react-icons/ri'

import { contactInfo } from '../../data/Data'

import { Title, Text } from './contact.styles'

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
        <Text>
          <RiWhatsappLine />
          {contactInfo.whatsapp.toLowerCase()}
        </Text>
      </Link>
    </>
  )
}

export default ContactCard
