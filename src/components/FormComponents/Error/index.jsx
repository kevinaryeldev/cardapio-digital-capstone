import { ErrorStyled } from "./style";

const FormError = ({ children, type, id, error, ...rest }) => {
  return <ErrorStyled>{children}</ErrorStyled>;
};

export default FormError;
