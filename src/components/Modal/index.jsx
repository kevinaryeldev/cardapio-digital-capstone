import { ModalStyled } from "./style";
const Modal = ({ children, setState, height, width, top, left }) => {
  return (
    <ModalStyled
      setState={setState}
      height={height}
      width={width}
      top={top}
      left={left}
    >
      <div>{children}</div>
    </ModalStyled>
  );
};
export default Modal;
