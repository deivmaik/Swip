import styled from 'styled-components';
import { media} from '../../global'

export const Container = styled.div`
padding : 5%;
display: grid; 
justify-content: center;
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr;
gap: 1%;

${media.desktop}{
    gap: 10%;
}
`

export const SwipWrapper = styled.div`
margin-top: -15%;
display: grid;
justify-content: center;
${media.desktop}{
    margin-top: -5%;
    &:hover{
        cursor: pointer;
        background: linear-gradient(141.87deg, #F8F8F8 -8.27%, #EFEFEF 101.52%);
        box-sizing: border-box;
        border-radius: 20px;
    }
}
`
export const Img = styled.img`
scale: 0.75;
${media.desktop}{
scale: 1;
}
`
export const Wrapper = styled.div`
${media.desktop}{
display: block;
width: 50%;
}
`
export const Text = styled.p`
text-align: center;
margin-top: -2rem;

font-weight: 500;
font-size: 16px;
line-height: 160%;
color: #666565;

${media.desktop}{
scale: 1;
}
`

export const Title = styled.h2`
text-align: center;
font-weight: bold;
font-size: 2.2rem;

`