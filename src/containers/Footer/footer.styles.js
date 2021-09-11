import styled  from 'styled-components'
import { colors, media } from '../../global'

export const Wrapper = styled.section`
height: 100%;
background-color: ${colors.dark};
${media.desktop}{
    height: 85vh;
  }
`

export const Container = styled.div`
${media.desktop}{
  padding-top: 7.5vh;
  display: grid; 
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr ;

gap: 0px;
}
`

export const MadeIn = styled.p`
margin : 2rem;
padding: 5rem;
text-align: center;
color: ${colors.light};

`
