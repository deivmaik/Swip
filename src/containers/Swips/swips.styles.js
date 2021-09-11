import styled  from 'styled-components'
import { media } from '../../global'

export const Wrapper = styled.section`
margin: 0 ;
padding: 0 2rem;
height: 100%;
background-color: #f5f5f5;
${media.desktop}{
    margin: 0 0;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
`