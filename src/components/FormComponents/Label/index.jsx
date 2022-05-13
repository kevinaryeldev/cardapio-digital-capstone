import { LabelStyled } from "./style";

const Label = ({ children, htmlFor }) => {
  return <LabelStyled htmlFor={htmlFor}>{children}</LabelStyled>;
};

export default Label;
