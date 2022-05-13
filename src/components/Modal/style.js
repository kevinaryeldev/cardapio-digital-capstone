import styled from "styled-components";

export const ModalStyled = styled.div`
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  display: ${(props) => (props.setState ? "block" : "none")};
  div {
    box-sizing: content-box;
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
  }
`;
