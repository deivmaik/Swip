import styled  from 'styled-components'
import { colors, media } from '../../global'

export const Wrapper = styled.section`
background-color: ${colors.light};
padding: 0 2rem;
${media.tablet}{
    display: flex;
    justify-content : space-around;
    align-items : center;
    height  : 55vh;
}
${media.desktop}{
    padding: 0 1rem;
    height  : 80vh;
    }
`
