import styled from 'styled-components'
import { colors, media } from '../../global'
import { Link } from "react-router-dom";

export const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  background: ${colors.light};
  height: 8rem;
  display: flex;
  justify-content: center;
  z-index: 10;
  ${media.tablet}{
    padding: 0 4rem;
    justify-content: space-around;
}
`
// Its imported as Link so its able to be styled with styled-components.
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 5rem;
  ${media.desktop}{
  margin-left: 0;
}
`



