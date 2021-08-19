import React from 'react'
import { Link } from 'react-router-dom'

import { SiTiktok } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramLine } from 'react-icons/ri'
import { RiYoutubeFill } from 'react-icons/ri'

import {
    Title,
    SMItem
} from './styles/socialMedia.styles'

const SocialMedia = () => {
    return (
        <>
            <Title>Siguenos en</Title>
            <Link to='#' >
                <SMItem><FaFacebookF/>Facebook</SMItem>
            </Link>
            <Link to='#' >
                <SMItem><RiInstagramLine/>Instagram</SMItem>
            </Link>
            <Link to='https://www.tiktok.com/@swip.bo' >
                <SMItem><SiTiktok />TikTok</SMItem>
            </Link>
            <Link to='#' >
                <SMItem><RiYoutubeFill/>Youtube</SMItem>
            </Link>
        </>
    )
}

export default SocialMedia
