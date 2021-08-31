import styled  from 'styled-components'
import { colors, media } from '../../global'

export const Wrapper = styled.section`
margin: 0 ;
padding: 0 2rem;
height: 100%;
background-color: ${colors.light};
${media.desktop}{
    margin: 0 0;
}
`
export const Container = styled.div`
background-color: ${colors.light};
${media.desktop}{
    display: flex;
    justify-content : space-around;
    align-items : center;
}
    
`