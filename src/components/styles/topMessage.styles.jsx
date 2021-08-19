import styled from 'styled-components'
import {  colors } from '../../global'

export const Wrapper = styled.section`
 background: ${colors.important};
  height: 100%;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`

export const Text = styled.p`
 text-align: center;
 color: ${colors.light};
 font-size: 1.6rem;
 font-weight: 500;
 line-height: 150%;
`
export const Span = styled.span`
padding: 0 0 0 0.5rem;
color: ${colors.light};
font-size: 1.6rem;
font-style: italic;
font-weight: bold;
`