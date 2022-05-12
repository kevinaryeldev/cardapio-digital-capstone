

import styled from "styled-components"

export const ButtonStyled = styled.button`

font-family: 'Noto Serif', serif;
background-color: ${(props) => (props.bgBlack ? "var(--primary-color)" : props.bgYellow ? "var(--seondary-color)" : "var(--primary-color-50)")};
color: ${(props) => (props.bgBlack ? "var(--seondary-color)": props.bgYellow ? "var(--primary-color)" :  "var(--terciary-color)")};
font-size: 16px;
font-weight: ${(props) => (props.bolder ? "700" : "400")};
height: ${(props) => (props.circle ? "75px" : "42px")};
width: ${(props) => (props.circle ? "75px" : "inherit")};
border-radius:  ${(props) => (props.circle ? "50%" : "15px")};
box-shadow: ${(props) => (props.circle ? "inherit" : "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -4px 4px rgba(0, 0, 0, 0.25)")};

svg {
    height: 32px;
    width: 32px;
}
`

