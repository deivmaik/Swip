import styled  from 'styled-components'
import { colors, media } from '../../global'

export const Wrapper = styled.div`
margin-top: 2rem;
padding-top: 2rem;
`
export const SliderText = styled.p`
  color: ${colors.light};
  font-size: 1.8rem;
  font-weight: 800;
  ${media.desktop}{
  font-size: 6.5rem;
  text-align : center;
}
`