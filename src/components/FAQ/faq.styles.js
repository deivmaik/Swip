import styled from 'styled-components'
import { colors, media } from '../../global'

export const Wrapper = styled.div`
/* The following are styles to be applied in the Footer component */
padding-top: 5rem;
display: grid;
grid-row-start: 1;
grid-column-start: 2;

grid-row-end: 2;
grid-column-end: 4;

`
export const Text = styled.h3`
text-align: center;
font-weight: 500;
font-size: 2.2rem;
color: ${colors.light}
`
export const End = styled.p`
text-align: center;
font-size: 1.6rem;
color: ${colors.grey}
`