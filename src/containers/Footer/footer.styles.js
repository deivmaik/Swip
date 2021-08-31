import styled  from 'styled-components'
import { colors, media } from '../../global'

export const Wrapper = styled.section`
height: 100%;
background-color: ${colors.dark};
${media.desktop}{
    height: 100vh;
  }
`

export const Container = styled.div`
${media.desktop}{
display: grid;
grid-template-columns:  35% 32.5% 32.5%; ;
grid-template-rows: 1fr;
}
`
export const GridEnd = styled.div`
${media.desktop}{
  grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 2;
}
`
export const GridStart = styled.div`
${media.desktop}{
  grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 1;
grid-row-end: 2;
}
`

export const MadeIn = styled.p`
margin : 2rem;
padding: 2rem;
text-align: center;
color: ${colors.light};
`
