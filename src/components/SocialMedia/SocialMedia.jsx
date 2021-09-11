import React from 'react'

import { SiTiktok } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramLine } from 'react-icons/ri'

import { Title, SMItem } from './socialMedia.styles'
import { openInNewTab } from '../../helpers/functions'

function SocialMedia() {
  return (
    <>
      <Title>Siguenos en</Title>
      <SMItem onClick={() => openInNewTab('https://www.facebook.com/swip.bo')}>
        <FaFacebookF />
        Facebook
      </SMItem>
      <SMItem
        onClick={() => openInNewTab('https://www.instagram.com/swip.boo')}
      >
        <RiInstagramLine />
        Instagram
      </SMItem>
      <SMItem onClick={() => openInNewTab('https://www.tiktok.com/@swip.bo')}>
        <SiTiktok />
        TikTok
      </SMItem>
    </>
  )
}

export default SocialMedia
