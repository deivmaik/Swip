import React from 'react'

import { 
    Wrapper,
    Text,
    Span
 } from './styles/topMessage.styles'

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

function TopMessage({
    text,
    span
}){
    return (
        <Wrapper onClick={() => openInNewTab('https://api.whatsapp.com/send/?phone=%2B591123456789&text&app_absent=0whatsapp%20API')} >
            <Text>{text}<Span>{span}</Span></Text> 
        </Wrapper>
    )
}

export default TopMessage
