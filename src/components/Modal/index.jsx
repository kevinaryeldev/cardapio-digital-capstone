import { ModalStyled } from "./style";
const Modal = ({ children, setState, height, width }) => {
  return (
    <ModalStyled setState={setState} height={height} width={width}>
      <div>{children}</div>
    </ModalStyled>
  );
};
export default Modal;
