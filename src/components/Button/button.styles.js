import styled from 'styled-components'
import { colors } from '../../global'

export const ButtonBase = styled.button`
display: flex;
justify-content: center;
align-items: center;

height: 4rem;
background: ${colors.darkTone};
border-radius: 1rem;
padding: 0.5rem 2.2rem;
border: none;
transition: all 0.2s ease-in-out;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #03E2DD;
    color: ${colors.dark};
  }

  /* Font Specs */
font-family: inherit;
font-weight: 600;
font-size: 1.6rem;
color: white;
text-align: center;
cursor: pointer;
text-decoration: none;
outline: none;

/* This disables the default button specs */
-webkit-appearance: none;
-moz-appearance: none;
`