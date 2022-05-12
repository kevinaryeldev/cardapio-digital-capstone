import { ButtonStyled } from "./style";

const Button = ({ children, type, onClick }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
