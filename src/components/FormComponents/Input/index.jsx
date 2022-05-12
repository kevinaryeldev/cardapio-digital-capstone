import { InputStyled } from "./style";

const Input = ({ type, id, error, registerType, maxLength }) => {
  return <InputStyled type={type} id={id} {...registerType} error={error} maxLength={maxLength}/>;
};

export default Input;
