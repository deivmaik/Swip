import styled  from 'styled-components'
import { colors, media } from '../../global'

export const SliderText = styled.p`
  color: ${colors.dark};
  font-size: 6.6rem;
  font-weight: 900;
  line-height: 160%;
  text-align:center;
  -webkit-text-stroke: 0.1rem  ${colors.secondaryText};
  ${media.desktop}{
  margin-bottom: 0;
}
`

