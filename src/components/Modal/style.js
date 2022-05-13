import styled from "styled-components";

export const ModalStyled = styled.div`
  z-index: auto;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  display: ${(props) =>
    props.state ? (props.flex ? "flex" : "block") : "none"};
  align-content: ${(props) => (props.align ? props.align : "initial")};
  justify-content: ${(props) => (props.justify ? props.justify : "initial")};
  div {
    top: ${(props) => (props.top ? props.top : "0")};
    left: ${(props) => (props.left ? props.left : "0")};
    position: absolute;
    box-sizing: content-box;
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
  }
`;
