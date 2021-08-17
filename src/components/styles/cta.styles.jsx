import styled from 'styled-components'
import { colors } from '../../global'


export const Button = styled.button`
margin-top: 10%;
width: 25rem;
height: 6.5rem;
background-color:  ${colors.darkTone};
border: none;
border-radius: 2rem;


/* Font Specs */
font-family: inherit;
font-weight: 800;
font-size: 2rem;
line-height: 160%;
color: white;
text-align: center;
cursor: pointer;
text-decoration: none;

/* This disables the default button specs */
-webkit-appearance: none;
-moz-appearance: none;
   
`






