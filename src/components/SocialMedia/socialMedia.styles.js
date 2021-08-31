import styled from 'styled-components'
import { colors } from '../../global'
import { Text } from '../Contact/contact.styles'

export const Title = styled.p`
font-weight: 500;
font-size: 1.8rem;
color: ${colors.secondaryText};
`

// This gets all the styles from Text in .contact 
export const SMItem = styled(Text)`
  ${Text};
  `