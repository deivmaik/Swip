import React from 'react'
import SideContent from '../components/SideContent'
import Instructions from '../components/Instructions'
import Video from '../components/Video'

import { Wrapper} from './styles/hiw.styles'

const HIW = () => {
    return (
        <Wrapper>
            <SideContent/>
            <Instructions/>
            <Video/>
        </Wrapper>
    )
}

export default HIW
