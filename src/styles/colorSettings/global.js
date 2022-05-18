import styled from "styled-components";

const ColorsTheme = styled.div`
    --primary-color: ${(props) => props.primaryColor};
    --primary-color-50: ${(props) => props.primaryColor50};
    --secondary-color: ${(props) => props.secondaryColor};
    --secondary-color-50: ${(props) => props.secondaryColor50};
    --terciary-color: ${(props) => props.terciaryColor};
    --terciary-color-50: ${(props) => props.terciaryColor50};       

`

export default ColorsTheme;