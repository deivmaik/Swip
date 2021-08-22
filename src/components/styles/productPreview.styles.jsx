import styled from 'styled-components';
import { colors, media } from '../../global'
import { ButtonBase }  from '../styles/button.styles'

export const Wrapper = styled.div`
width: 30rem;
height: 38rem;
margin:0 auto;
`

export const Img = styled.img`
margin: 0 ;
border-radius: 1rem 1rem 0 0 ;

`

// Imported from Button component as ButtonBase
export const Button = styled(ButtonBase)`
/* Body styles */
margin-top: -2%;
height: 6rem;
width: 30rem;
background: #EFA6A2;
border-radius: 0 0 1rem 1rem;
&:hover {
    background: ${colors.darkTone};
    color: ${colors.light};
  }
/* Text styles */
color: black;
`