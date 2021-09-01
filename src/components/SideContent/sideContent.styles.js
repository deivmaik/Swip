import styled from "styled-components";
import { colors, media } from '../../global'

export const Wrapper = styled.div`
padding: 10% 0 10% 0;
margin: 0 0;
background-color: ${colors.dark};

${media.desktop}{
    padding: 0 ;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;

    align-items: center;
    justify-content: center;
    padding: 0 3rem;
}
`

export const Title = styled.h2`
/* Background styles */
margin : 0;
padding: 3rem 0 1rem;
/* Text styles */
text-align: center;
font-weight: bold;
font-size: 3rem;
line-height: 160%;
letter-spacing: 0.055em;
color: ${colors.light};

${media.regular}{
    font-size: 4rem;
    padding: 2rem 0 1rem;
}

${media.desktop}{
    /* background styles */
    grid-row-start: 2;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-column-end: 2;

    padding-top:  25%;
    /* Text styles */
    text-align: start;
}

`
export const Subtitle = styled.p`
/* Background styles */
margin : 0;
padding-bottom: 3rem;
/* Text styles */
text-align: center;
font-size: 1.6rem;
line-height: 160%;
letter-spacing: 0.055em;
color: ${colors.secondaryText};

${media.regular}{
    padding-bottom: 4rem;
}

${media.desktop}{
    /* background styles */
    grid-row-start: 3;
    grid-column-start: 1;
    grid-row-end: 4;
    grid-column-end: 2;

    padding-bottom:  25%;
    padding-right:  25%;
    /* Text styles */
    text-align: start;

}
`