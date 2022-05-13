import styled from "styled-components";
import { Shake } from "../../../styles/animations";

export const ErrorStyled = styled.span`
  animation: ${Shake} 300ms;
  width: 100%;
  max-width: 400px;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--error-color);

  margin-top: -15px;
  margin-bottom: 15px;
`;
