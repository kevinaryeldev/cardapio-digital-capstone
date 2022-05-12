import styled from "styled-components";

export const ViewPasswordContainer = styled.button`
  //Quando é dado focus no input, o background-color fica na cor --bg-white-light (ver FormInput)
  background-color: var(--color-secundary-50);
  position: absolute;
  z-index: 2;

  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 5px;
  right: 5px;

  width: 40px;
  height: 40px;

  .viewPassword {
    color: var(--color-primary);

    &:hover {
      cursor: pointer;
      zoom: 110%;
    }
  }
`;
