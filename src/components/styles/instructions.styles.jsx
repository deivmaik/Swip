import styled from 'styled-components';
import { media } from '../../global'

export const Wrapper = styled.div`
background: black;
${media.desktop}{
    padding: 35% 0;
    max-height: 100vh;
}
`