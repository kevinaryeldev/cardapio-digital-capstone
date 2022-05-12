import styled from "styled-components"

export const RequestCardContainer = styled.div`
font-family: 'Noto Serif';
background-color: var(--terciary-color);
width: 253px;
height: 337px;
border-radius: 15px;
padding: 20px 31px 28px 20px;


@media screen and (min-width: 1024px) {
    width: 300px;
    height: 400px;

}
`

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

div {
    display: flex;
    flex-direction: column;

    span {
        color: var(--primary-color);
        font-size: 13px
    }

    span:first-child {
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 8px;
    }
}

@media screen and (min-width: 1024px) {
    div {
        span {
            font-size: 16px
        }

        span:first-child {
            font-size: 20px;
            margin-bottom: 10px;
        }
}

}

`

export const TableNumber = styled.div`
background-color: var(--secondary-color);
width: 38px;
height: 38px;
color: var(--primary-color);
border-radius: 50%;
border: 1px solid var(--primary-color);
text-align: center;
line-height: 38px;
font-size: 16px;

@media screen and (min-width: 1024px) {
    height: 54px;
    width: 54px;
    line-height: 54px;
    font-size: 22px;

}
`