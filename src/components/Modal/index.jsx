import { ModalStyled } from "./style";
const Modal = ({
  children,
  state,
  height,
  width,
  top,
  left,
  flex,
  align,
  justify,
}) => {
  return (
    <ModalStyled
      state={state}
      height={height}
      width={width}
      top={top}
      left={left}
      flex={flex}
      align={align}
      justify={justify}
    >
      <div>{children}</div>
    </ModalStyled>
  );
};
export default Modal;
