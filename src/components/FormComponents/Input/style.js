import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  max-width: 400px;
  height: 50px;
  padding: 15px;

  border-radius: 8px;
  background-color: var(--color-secundary-50);
  color: var(--color-primary);

  ${(props) => props.error && "border: 1px solid var(--color-error);"}

  font-size: 1rem;
  font-weight: 400;

  margin-bottom: 25px;

  &:focus {
    outline: none;
    background-color: var(--color-secundary);

    ~ button {
      background-color: var(--color-secundary);
    }
  }
`;
