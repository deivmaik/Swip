import styled from 'styled-components'
import { colors, media } from '../../global'

export const Wrapper = styled.div`
margin: 0 2rem 0 2rem;
${media.desktop}{
    margin: 0 10rem 0 2rem;
}
`

export const Title = styled.p`
font-weight: 500;
font-size: 2.2rem;
color: ${colors.light}
`
export const Question = styled.p`
font-weight: 500;
font-size: 1.8rem;
color: ${colors.secondaryText};
${media.desktop}{
font-size: 1.6rem;
}
`
export const Answer = styled.p`
font-weight: 300;
font-size: 1.6rem;
line-height: 160%;
color: ${colors.light};
${media.desktop}{
font-size: 1.4rem;
}

/* body */
padding : 2rem;
background: #1C1C1C;
border-radius: 1rem;
`
