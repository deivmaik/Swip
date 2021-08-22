import styled from "styled-components";
import { colors, media } from '../../global'

export const Wrapper = styled.div`
display : flex;
align-items : center;
justify-content : center;

background:${colors.dark};

`
    
export const GIF = styled.img`
width   : 50%;
${media.desktop}{
    width   : 15%;
}
filter: drop-shadow(10px 10px 0px #03E2DD);
border-radius: 25px;
`
