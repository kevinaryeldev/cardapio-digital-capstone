import { ErrorStyled } from "./style";

const FormError = ({
  children,
  type,
  id,
  error,
  maxWidth = "400px",
  marginTop = "-15px",
  ...rest
}) => {
  return (
    <ErrorStyled maxWidth={maxWidth} marginTop={marginTop}>
      {children}
    </ErrorStyled>
  );
};

export default FormError;
