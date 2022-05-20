import styled from "styled-components";
import { Shake } from "../../../styles/animations";

export const ErrorStyled = styled.span`
  animation: ${Shake} 300ms;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  text-align: left;
  font-size: 0.8rem;
  font-weight: 300;
  color: #d93025;

  margin-top: ${(props) => props.marginTop || "-15px"};
  margin-bottom: 15px;
`;
