import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, media } from '../../global'

export const NavMenu = styled.div`
  display: none;
  ${media.tablet}{
  display: flex;
  justify-content: end;
  flex-basis: 60%;
}
${media.desktop}{
  justify-content: flex-end;
}
`;
// Its imported as Link so its able to be styled with styled-components.
export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  &.active, :hover {
    color: ${colors.important};
  }
`;



