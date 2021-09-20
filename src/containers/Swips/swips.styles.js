import styled  from 'styled-components'
import { media } from '../../global'

export const Wrapper = styled.section`
margin: 0 ;
padding: 0 2rem;
background-color: #F5FFFF;
${media.tablet}{
    margin: 0 0;
    height: 50vh;
    /* display grid only when ProductPreview is enable */
    /* display: grid;
    grid-template-rows: 1fr;
   grid-template-columns: 1fr 1fr 1fr; */
    
}
${media.tablet}{
    height: 100vh;
}
`