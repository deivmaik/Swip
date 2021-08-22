import styled  from 'styled-components'
import { colors, media } from '../../global'

export const Wrapper = styled.section`
height: 100%;
background-color: ${colors.light};
${media.desktop}{
    height: 100vh;
  }
`