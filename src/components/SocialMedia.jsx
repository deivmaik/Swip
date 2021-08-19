import React from 'react'

import { SiTiktok } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramLine } from 'react-icons/ri'
import { RiYoutubeFill } from 'react-icons/ri'

import {
    SocialMediaList,
    FollowUs,
    SMItem
} from './styles/socialMedia.styles'

const SocialMedia = () => {
    return (
        <SocialMediaList>
            <FollowUs>Siguenos en</FollowUs>
            <SMItem><FaFacebookF/>Facebook</SMItem>
            <SMItem><RiInstagramLine/>Instagram</SMItem>
            <SMItem><SiTiktok />TikTok</SMItem>
            <SMItem><RiYoutubeFill/>Youtube</SMItem>
        </SocialMediaList>
    )
}

export default SocialMedia
