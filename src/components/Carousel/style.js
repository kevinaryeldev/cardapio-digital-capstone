import styled from "styled-components"

export const TestimonialArticle = styled.article`
color: var(--primary-color);
padding: 25px;
padding-bottom: 50px;
margin: 0 40px;
background-color: #DDBC8B;
border-radius: 25px;

p {
    margin-top: 10px;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;

}

@media (min-width: 1024px) {

    p {
    margin-top: 26px;
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
}

}
`

export const TestimonialHeader = styled.div`
display: flex;


h5 {
    font-weight: 700;
    font-size: 14px;
}

h6 {
    font-weight: 400;
    font-size: 12px;
}

@media (min-width: 1024px) {

h5 {
    font-size: 16px;
}

h6 {
    font-size: 14px;
}
}


`

export const FigureStyled = styled.figure`
margin-right: 12px;

img {
    border-radius: 30px;
    border: 1px solid black;
    width: 94px;
    height: 94px;
}

figcaption {
    display: none
}
`