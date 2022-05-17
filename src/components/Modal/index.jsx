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
  padding,
  setState,
}) => {
  return (
    <ModalStyled
      id="modalStyled"
      state={state}
      height={height}
      width={width}
      top={top}
      left={left}
      flex={flex}
      align={align}
      justify={justify}
      padding={padding}
      onClick={(event) => {
        if (event.target.id === "modalStyled") {
          setState(false);
        }
      }}
    >
      <div className="div">{children}</div>
    </ModalStyled>
  );
};
export default Modal;
