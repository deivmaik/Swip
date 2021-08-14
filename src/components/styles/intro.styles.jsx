import styled from 'styled-components'
import { media , colors } from '../../global'

export const Wrapper = styled.div`
${media.desktop}{
    max-height: 75vh;
    max-width: 35%;
}
`

export const Title = styled.h1`
font-weight: 800;
font-size: 4.5rem;
line-height: 160%;
color:  ${colors.DarkTone};
`

export const Desc = styled.p`
font-size: 1.8rem;
line-height: 160%;
color:  ${colors.SecondaryText};
`