import styled from "styled-components";
import { media } from '../../global'

export const Wrapper = styled.div`
background-color: black;
${media.desktop}{
height : 100vh;
display: flex;
align-items: center;
justify-content: center;

}
`
export const Container = styled.div`
padding: 0 0;

${media.desktop}{
    padding: 0 3rem;
}
`

export const Title = styled.h2`
margin : 0;
padding: 3rem 0 1rem;

font-weight: bold;
font-size: 3rem;
line-height: 160%;
letter-spacing: 0.055em;
color: #FFFFFF;
${media.regular}{
    font-size: 4rem;
    padding: 2rem 0 1rem;
}

${media.desktop}{
    padding:  0;
}

`
export const Subtitle = styled.p`
margin : 0;
padding-bottom: 3rem;

font-size: 1.6rem;
line-height: 160%;
letter-spacing: 0.055em;
color: #BBBBBB;

${media.regular}{
    padding-bottom: 4rem;
}

${media.desktop}{
    padding-bottom: 2rem;
}
`