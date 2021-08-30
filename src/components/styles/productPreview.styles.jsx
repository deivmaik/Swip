import styled from 'styled-components';
import { colors, media } from '../../global'
import { ButtonBase }  from '../styles/button.styles'

export const Wrapper = styled.div`
width: 30rem;
height: 38rem;
margin:0 auto;

${media.desktop}{
padding-top: 0;
  margin  : 0;
}
`

export const Img = styled.img`
margin: 0 ;
border-radius: 1rem 1rem 0 0 ;

${media.desktop}{
  margin-top: 12%;
  scale: 1.2;
}
`

// Imported from Button component as ButtonBase
export const Button = styled(ButtonBase)`
/* Body styles */
margin-top: -2%;
height: 6rem;
width: 30rem;
background: ${colors.darkTone};
border-radius: 0 0 1rem 1rem;
/* Text styles */
color: ${colors.light};
&:hover {
    background: ${colors.darkTone};
    color: ${colors.light};
  }

${media.desktop}{
  scale: 1.2;
}
`