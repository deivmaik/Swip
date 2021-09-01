import styled from "styled-components";
import { colors, media } from '../../global'

export const Card = styled.div`
display: grid; 
background-color: ${colors.dark};
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
`
export const Container = styled.div`
/* Flex aligns it to center */
display : flex;
align-items : center;
justify-content : center;
/* Grid to position the container inside the layout */
grid-row-start: 1;
grid-column-start: 1;
grid-row-end: 4;
grid-column-end: 2;
`

export const Number = styled.p`
display : flex;
align-items : center;
justify-content : center;
/* Background styles */
margin: 0;
padding: 1rem 2.5rem ;
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(12px);
border-radius: 1rem;
/* Font styles */
font-weight: 600;
font-size: 2rem;
line-height: 160%;
color: ${colors.light};

${media.regular}{
    padding: 1.5rem 3rem ;
    font-size: 2.8rem;
}
`
    
export const Title = styled.p`
/* Grid styles */
grid-row-start: 1;
grid-column-start: 2;
grid-row-end: 2;
grid-column-end: 4;
/* Background styles */
margin: 0;
padding: 0.5rem;
/* Font styles */
display : flex;
align-items : center;
font-weight: 600;
font-size: 1.6rem;
line-height: 160%;
color: ${colors.light};

${media.regular}{
    font-size: 1.8rem;
    margin-top: 1rem;
}
`

export const Subtitle = styled.p`
/* Grid styles */
grid-row-start: 2;
grid-column-start: 2;
grid-row-end: 4;
grid-column-end: 4;
/* Background styles */
margin: 0;
padding: 0.5rem;
/* Font styles */
display : flex;
align-items : center;
font-size: 1.6rem;
line-height: 160%;
color: #BBBBBB;


`