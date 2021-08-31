import styled from 'styled-components'
import { media, colors } from '../../global'


export const Button = styled.button`
margin: 10% 0 10% 0;
width: 22rem;
height: 6rem;
border: none;
background: ${colors.darkTone};
box-shadow: 0.6rem 0.6rem 0 #03E2DD;
border-radius: 1rem;

/* Font Specs */
font-family: inherit;
font-style: italic;
font-weight: 900;
font-size: 2.4rem;
line-height: 160%;
color: white;
text-align: center;
cursor: pointer;
text-decoration: none;

${media.regular}{
    width: 30rem;
    height: 7.7rem; 

    font-size: 3.3rem;

}
/* Transitions */
transition: all .2s ease-in-out;
&:hover{
    transform: scale(1.1);
}
/* This disables the default button specs */
-webkit-appearance: none;
-moz-appearance: none;

`




