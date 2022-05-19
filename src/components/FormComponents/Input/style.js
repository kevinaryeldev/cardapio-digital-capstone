import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  max-width: 400px;
  height: 50px;
  padding: 15px;

  border-radius: 8px;
  background-color: #b89664;
  color: #21262d;

  ${(props) => props.error && "border: 1px solid var(--error-color);"}

  font-size: 1rem;
  font-weight: 400;

  margin-bottom: 25px;

  &:focus {
    outline: none;
    background-color: #ddbc8b;

    ~ button {
      background-color: #ddbc8b;
    }
  }
`;
