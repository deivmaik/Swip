import styled from 'styled-components'
import { colors, media } from '../../global'
import { NavLink as Link } from "react-router-dom";
import { Link as Redirect } from "react-router-dom";



export const Wrapper = styled.nav`
 background: #000000;
  ${media.desktop}{
    padding: 0 10rem;
    justify-content: space-between;
}
`
// Its imported as Link so its able to be styled with styled-components.
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  ${media.desktop}{
    flex-basis: 100%;
  }
  
`
export const BasicInfo = styled.div`
 font-weight: 400;
  color: ${colors.light};
`
export const BasicInfoText = styled.div`
display: block;
 
`



// Legal styles

export const Legal = styled.div`
font-weight: 400;
color: ${colors.light};
`

export const LegalText = styled.div`
display: block;  
`

  