import styled from "styled-components";

export const ColorsTheme = styled.div`
    --primary-color: ${(props) => props.primaryColor};
    --primary-color-50: ${(props) => props.primaryColor50};
    --secondary-color: ${(props) => props.secondaryColor};
    --secondary-color-50: ${(props) => props.secondaryColor50};
    --terciary-color: ${(props) => props.terciaryColor};
    --terciary-color-50: ${(props) => props.terciaryColor50};       

`

export const defaultTheme = {
    primaryColor: "#21262D",
    primaryColor50: "#485D5E",
    secondaryColor: "#DDBC8B",
    secondaryColor50: "#B89664",
    terciaryColor: "#FFFFFF",
    terciaryColor50: "#E5E5E5",
}