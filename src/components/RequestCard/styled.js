import styled from "styled-components"

export const RequestCardContainer = styled.div`
font-family: 'Noto Serif';
background-color: var(--terciary-color);
width: 253px;
height: 337px;
overflow-y : auto;
border-radius: 15px;
padding: 20px 31px 28px 20px;
margin: 50px 0; 

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px var(--primary-color-50); 
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}


::-webkit-scrollbar-thumb {
  background: var(--secondary-color-50); 
  border-radius: 10px;
}

@media screen and (min-width: 1024px) {
    width: 300px;
    height: 400px;
    margin: 65px 89px 50px 89px; 

}
`

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 18px;

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

export const MainContent = styled.div`
display: flex;
position: relative;
padding: 14px 0;
::after {
    content: "";
    border-bottom: 1px solid var(--primary-color);
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 20%;
}

img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}


@media screen and (min-width: 1024px) {

    ::after {
    left: 21%;
    right: 21%;
}

}

`

export const RequestBody = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;

div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    strong {
        font-size: 13px;
    }

    span {
        font-size: 10px;
    }
}

@media screen and (min-width: 1024px) {

    div {
    margin-left: 10px;

    strong {
        font-size: 16px;
    }

    span {
        font-size: 12px;
    }
}
}
`

export const FooterContent = styled.div`
padding-top: 15px;
font-size: 10px;
display: flex;
justify-content: space-between;

div {
    display: flex;
    flex-direction: column;

    span:first-child {
        margin-bottom: 4px;
    }
}

div:last-child {
    justify-content: space-around;
    flex-direction: row;
}


@media screen and (min-width: 1024px) {
    padding: 10px 9px 11px 13px;
    font-size: 12px;

    span:first-child {
        margin-bottom: 5px;
    }
}
`

export const StatusDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
font-weight: 700;
font-size: 13px;
height: 36px;
width: ${(props) => (props.small ? "36px" : "106px")};
margin-left: ${(props) => (props.small && props.accepted ? "18px" : "0px")};
color: ${(props) => (props.accepted ? "var(--positive-color)" : "var(--negative-color)")};
border: ${(props) => (props.accepted ? "1px solid var(--positive-color)" : "1px solid var(--negative-color)")};
border-radius: 3px;

&:hover {
    cursor: pointer;
}
`