import styled  from 'styled-components'
import { media } from '../../global'

export const Wrapper = styled.section`

margin: 0 ;
padding: 0 2rem;
height: 100%;
background-color: #F5FFFF;
${media.tablet}{
    margin: 0 0;
    height: 50vh;
    display: grid;
    grid-template-rows: 1fr;
   grid-template-columns: 1fr 1fr 1fr;
    
}
${media.desktop}{
    height: 87.5vh;
}
`