import styled  from 'styled-components'
import { media } from '../../global'



export const Wrapper = styled.section`
margin: 0 2rem;
`
export const Container = styled.div`
${media.desktop}{
    display: flex;
    justify-content : space-around;
    align-items : center;
}
    
`