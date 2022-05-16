import styled from "styled-components";

export const ModalStyled = styled.div`
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  display: ${(props) =>
    props.state ? (props.flex ? "flex" : "block") : "none"};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  div {
    position: relative;
    z-index: 200;
    top: ${(props) => (props.top ? props.top : "0")};
    left: ${(props) => (props.left ? props.left : "0")};
    box-sizing: content-box;
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
  }
`;
