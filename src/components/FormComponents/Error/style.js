import styled from "styled-components";
import { Shake } from "../../../styles/animations/animations";

export const ErrorStyled = styled.span`
  animation: ${Shake} 300ms;
  width: 100%;
  max-width: 400px;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--color-error);

  margin-top: -15px;
  margin-bottom: 15px;
`;
