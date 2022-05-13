import styled from "styled-components"

export const Container = styled.div`

width: 100vw;
display: flex;
flex-direction: column;

background: linear-gradient(296.95deg, var(--primary-color) 0%, var(--primary-color-50) 99.65%);

@media (min-width: 1024px) {
    flex-direction: row;

}
`

export const Main = styled.div`

width: 100%;
height: 100%;
padding: 61px 80px;
display: flex;
justify-content: center;
flex-direction: column;
color: var(--terciary-color);

h1 {
    color: var(--secondary-color);
    font-size: 28px;
    margin-top: 22px;
    font-weight: 700;
    text-align: center;
}

span {
    font-size: 14px;
    color: var(--secondary-color);
    text-decoration: underline;
    &:hover {
        cursor: pointer;
    }
}

@media (min-width: 500px) {
    h1 {
        font-size: 48px;
    }
}

@media (min-width: 1024px) {
    h1 {
        margin-top: 43px;
        font-weight: 900;
    }

    span {
        font-size: 16px;
    }
}
`

export const MainInfo = styled.section`

display: flex;
flex-direction: column;
padding-top: 53px;
padding-bottom: 19px;
border-bottom: 2px dashed var(--secondary-color);

div {
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    max-width: 330px;
}

h3 {
    font-size: 16px;
}


button {
    width: 43px;
    font-size: 9px;
    font-weight: 700;
    margin-top: 11px;
}

@media (min-width: 1024px) {
    padding-top: 61px;
    padding-bottom: 25px;

    div {
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
        max-width: 610px;
    }

    h3 {
        font-size: 40px;
    }

    button {
        width: 97px;
        font-size: 16px;
        margin-top: 16px;
    }
}
`

export const ImageContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`

export const FigureStyled = styled.figure`

background-color: var(--secondary-color);
width: 101px;
height: 101px;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;

img {
    width: 64px;
    height: 64px;
}

figcaption { 
    display: none;
}

@media (min-width: 1024px) {
width: 124px;
height: 124px;
}

`

export const NameContainer = styled.div`
display: flex;
flex-direction: column;
/* margin-left: 50px; */

`

export const ConfigContainer = styled.section`
margin-top: 20px;
h6 {
    font-size: 16px;
    margin-bottom: 10px;
}

@media (min-width: 1024px) {
    h6 {
    font-size: 24px;
}}

`

export const ChangeColors = styled.section`
display: flex;
flex-direction: column;

div {
    max-width: 560px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
`

export const SelectColor = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;

input[type="color"] {
    width: 46px;
    height: 46px;
    margin-bottom: 15px;

    -webkit-appearance: none;
    border: none;
}
input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
}
input[type="color"]::-webkit-color-swatch {
    border: none;
}

span {
    font-size: 16px;
    font-weight: 600;
    color: var(--terciary-color);
    text-decoration: none;
}
`

export const ChangeEmail = styled.section`
display: flex;
flex-direction: column;
margin-top: 50px;

div {
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    max-width: 720px;
    font-size: 16px;

    span {
        font-size: 16px;
    }
}

@media (min-width: 1024px) {
    div {
        font-size: 24px;

        span {
            font-size: 24px;
        }
    }
}
`

export const ChangePassword = styled.section`
display: flex;
flex-direction: column;
margin-top: 50px;
`

export const PasswordContainer = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
flex-wrap: wrap;
max-width: 560px;

@media (min-width: 1024px) {

}
`

export const PasswordDiv = styled.div`
display: flex;
flex-direction: column;

span {
    color: var(--terciary-color);
    text-decoration: none;
    font-size: 15px;
    margin-bottom: 25px;
}

input {
    max-width: 158px;
    height: 44px;
    font-size: 15px;
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 6px;
}

@media (min-width: 1024px) {

    span {
        font-size: 24px;
}

input {
    /* width: 316px; */
    width: 255px;
    height: 65px;
    font-size: 24px;
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 6px;
    padding-left: 15px;
}

}
`