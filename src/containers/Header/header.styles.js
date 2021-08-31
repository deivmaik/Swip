import styled from 'styled-components'
import { colors, media } from '../../global'
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'

export const Wrapper = styled.nav`
  background: ${colors.light};
  height: 8rem;
  display: flex;
  justify-content: space-around;
  z-index: 10;
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
  /* This is the activeStyle class  */
  &.active {
    color: ${colors.activeColor};
  }
  ${media.desktop}{
    flex-basis: 100%;
  }
  
`

// This will be used later for the hamburger menu 
export const Bars = styled(FaBars)`
  display: block;
    /* position: absolute; */
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  ${media.desktop}{
    display: none;
  color: #fff;
  }
`


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 5rem;
  ${media.desktop}{
  margin-left: 0;
}
`



