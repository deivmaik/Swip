import styled from "styled-components";
import { colors, media } from '../../global'

export const Wrapper = styled.div`

padding : 10% 0 10% 0;
display : flex;
align-items : center;
justify-content : center;

height : 50vh;
background:${colors.dark};

${media.desktop}{
    height: 85vh;
    padding : 0;
}
`
    
export const GIF = styled.img`
width   : 85%;
${media.desktop}{
    width   : 60%;
}
filter: drop-shadow(1rem 1rem 0 ${colors.important});
border-radius: 25px;
`
