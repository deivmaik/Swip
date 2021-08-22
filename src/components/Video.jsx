import React from 'react'
import File from '../gif/video.gif'

import {
    Wrapper,
    GIF
} from './styles//video.styles'

const Video = () => {
    return (
        <Wrapper>
            <GIF src={File} alt="video" />
        </Wrapper>
    )
}

export default Video
