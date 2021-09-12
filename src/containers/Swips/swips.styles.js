import styled  from 'styled-components'
import { media } from '../../global'

export const Wrapper = styled.section`
border: 1px solid blue;

margin: 0 ;
padding: 0 2rem;
height: 100%;
background-color: #F5FFFF;
${media.tablet}{
    margin: 0 0;
    height: 87.5vh;
    display: grid;
    grid-template-rows: 1fr;
   grid-template-columns: 1fr 1fr 1fr;
    
}
`