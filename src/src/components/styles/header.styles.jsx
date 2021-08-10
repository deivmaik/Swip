import styled from 'styled-components'
import { colors } from './global'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;

max-height: 10rem;
`

export const LogoWrapper = styled.svg`
height: 5rem;
flex-basis: 40%;

`
export const Menu = styled.ul`
display: flex;
flex-basis: 40%;
/* This flex property matches the 50% remaining from the original flex container in the main wrapper */
justify-content: space-evenly;

@media screen and (max-width: 700px) {
    display: none ;
  }
/* Just a quick solution for hiding the menu, needs to be edited later */
`

export const Styledli = styled.li`
color: black;
`
export const CtaWrapper = styled.div`
flex-basis: 20%;

@media screen and (max-width: 700px) {
    display: none ;
  }
/* Just a quick solution for hiding the cta on desktop, needs to be edited later */
`

export const Cta = styled.p`

font-weight: bold;
font-size: 1.6rem;
color:  ${colors.Text};


`