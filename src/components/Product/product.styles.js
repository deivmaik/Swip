import styled from 'styled-components'
import { media } from '../../global'

export const Img = styled.img`
display: none;
${media.tablet}{
    display: block;
    width: 100%;
}
${media.desktop}{
    width: 40%;
}

`