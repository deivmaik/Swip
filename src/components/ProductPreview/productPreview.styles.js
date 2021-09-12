import styled from 'styled-components';
import { colors, media } from '../../global'
import { ButtonBase }  from '../Button/button.styles'

export const Wrapper = styled.div`
border: 1px solid blue;
padding-top: 20%;
display: grid;
justify-content: center;

${media.tablet}{
padding-top: 0;
  margin  : 0;

  display:grid;
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 2;
    grid-column-end: 2;
}
`

export const Img = styled.img`
margin: 0 auto;
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