import styled from 'styled-components'
import { media , colors } from '../../global'

export const Wrapper = styled.div`

background-color: ${colors.white};
${media.desktop}{
    max-width: 35%;
}
`

export const Title = styled.h1`
margin: 0 ;
padding: 4rem 0 2rem 0;
color:  ${colors.darkTone};
font-weight: 800;
font-size: 3.6rem;
line-height: 160%;
${media.regular}{
    font-size: 4.4rem;
}

`

export const Desc = styled.p`
margin-top: 0;
font-size: 1.6rem;
line-height: 160%;
color:  ${colors.secondaryText};

${media.regular}{
    font-size: 2rem;
}
`