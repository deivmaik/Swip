import styled from 'styled-components';
import { ButtonBase }  from '../Button/button.styles'
import { media, colors } from '../../global'

export const Container = styled.div`
${media.tablet}{
    padding: 5rem 10rem ;
}
`

export const Title = styled.h2`
margin: 0;
padding: 4rem 0 2rem;
font-weight: bold;
color: #000000;
text-align: center;
font-size: 2.6rem;
line-height: 3.3rem;

${media.regular}{
    padding: 4rem 2rem 2rem;
    font-size: 3.3rem;
    line-height: 4rem;
}
${media.desktop}{
padding: 6rem 2rem 4rem;
font-size: 4rem;
line-height: 6rem;
}
`

export const Desc = styled.p`
margin: 0;
padding: 0 0 4rem ;
font-weight: 500;
font-size: 1.6rem;
color: #666565;
text-align: center;
${media.regular}{
    padding: 0 2rem 4rem ;
    font-size: 1.8rem;
}
${media.desktop}{
font-size: 2rem;
padding: 0 2rem 0 ;
}
`

export const Colors = styled.div`
${media.tablet}{
display: grid; 
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr;
}
${media.desktop}{
    display: flex;
    justify-content: center;
}
`

export const Wrapper = styled.div`
padding: 0 5% 10% 0;
cursor: pointer;

`

export const Img = styled.img`
width: 100%;
border-radius: 1rem 1rem 0 0 ;
margin: 0 auto;

${media.desktop}{
margin: 10% auto;
  margin-top: 35%;
  scale: 0.9;
}
`
// Imported from Button component as ButtonBase
export const Button = styled(ButtonBase)`
/* Body styles */
margin-top: -2%;
height: 6rem;
width: 100%;
background: ${colors.darkTone};
border-radius: 0 0 1rem 1rem;
/* Text styles */
color: ${colors.light};
&:hover {
    background: ${colors.dark};
    color: ${colors.light};
  }

${media.desktop}{
  scale: 0.9;
  margin-top: -18%;
  align-items: center;
}
`