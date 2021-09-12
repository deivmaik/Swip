import styled from 'styled-components';
import { media } from '../../global'

export const Container = styled.div`
${media.tablet}{
    padding: 5rem 10rem ;
   
}
${media.desktop}{
    padding: 10rem 5rem ;

    display:grid;
    grid-row-start: 1;
    grid-column-start: 2;

    grid-row-end: 2;
    grid-column-end: 4;
}
`

export const Title = styled.h2`
margin: 0;
padding: 4rem 0 2rem;
font-weight: bold;
color: #000000;
text-align: center;
font-size: 2.6rem;
line-height: 3.3rem;

${media.regular}{
    padding: 4rem 2rem 2rem;
    font-size: 3.3rem;
    line-height: 4rem;
}
${media.desktop}{
font-size: 4.4rem;
line-height: 6rem;
}
`

export const Desc = styled.p`
margin: 0;
padding: 0 0 4rem ;
font-weight: 500;
font-size: 1.6rem;
color: #666565;
text-align: center;
${media.regular}{
    padding: 0 2rem 4rem ;
    font-size: 1.8rem;
}
${media.desktop}{
font-size: 2rem;
padding: 0 2rem 0 ;
}
`

export const Colors = styled.div`
display: flex;
justify-content: center;

`

export const Wrapper = styled.div`
padding: 0 5% 10% 0;
cursor: pointer;
`

export const Img = styled.img`
width: 100%;
`
