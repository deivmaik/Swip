import styled from "styled-components";
import { colors } from '../../global'

export const Card = styled.div`
display: grid; 
height : 100%;
background-color: ${colors.dark};
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
`
export const Container = styled.div`
/* Display flex to align it to the center */
display : flex;
align-items : center;
justify-content : center;
/* This grid is to position the container inside the layout */
grid-row-start: 1;
grid-column-start: 1;
grid-row-end: 3;
grid-column-end: 2;

`
    

export const Number = styled.p`
display : flex;
align-items : center;
justify-content : center;
/* Background styles */
margin: 0;
padding: 1.5rem 3rem ;
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(12px);
border-radius: 10px;
/* Font styles */
font-weight: 600;
font-size: 2.8rem;
line-height: 160%;
letter-spacing: 0.055em;
color: #FFFFFF;

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
font-size: 1.8rem;
line-height: 160%;
letter-spacing: 0.055em;
color: #FFFFFF;
`

export const Subtitle = styled.p`
/* Grid styles */
grid-row-start: 2;
grid-column-start: 2;
grid-row-end: 3;
grid-column-end: 4;
/* Background styles */
margin: 0;
padding: 0.5rem;
/* Font styles */
display : flex;
align-items : center;
font-size: 1.6rem;
line-height: 160%;
letter-spacing: 0.055em;
color: #BBBBBB;
`