import styled  from 'styled-components'
import { colors, media } from '../../global'

 

export const Wrapper = styled.section`
margin: 0 ;
padding: 2rem 2rem;
height: 100%;
background-color: ${colors.dark};
${media.desktop}{
  max-height: 100vh;
  display: grid; 

grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr 1fr;

gap: 0px;
height: 100%;
  }
`


