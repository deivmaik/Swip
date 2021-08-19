import styled from 'styled-components'
import { colors, media } from '../../global'
import { Link as Redirect } from "react-router-dom";


export const Wrapper = styled.div`
padding: 0 2rem;
margin: 5rem 2rem 0 2rem;
  ${media.desktop}{
    padding: 0 10rem;
    justify-content: space-between;
    margin: 0 2rem 0 2rem;

}
`
// Its imported as Link so its able to be styled with styled-components.
export const LogoContainer = styled(Redirect)`
display: flex;
align-items: center;
text-decoration: none;
height: 100%;
cursor: pointer;
${media.desktop}{
    flex-basis: 100%;
}
 
`
export const Title = styled.p`
font-weight: 500;
font-size: 1.8rem;
color: ${colors.secondaryText};
`

export const Text = styled.p`
font-weight: 400;
font-size: 1.6rem;
color: ${colors.light};

&:hover{
  text-decoration: underline;
`
 