import styled from "styled-components";

export const AccountStyled = styled.p`
  width: 100%;
  text-align: center;

  font-size: 0.9rem;
  color: var(--terciary-color-50);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  a {
    font-weight: 600;
    margin-left: 5px;
    color: var(--secondary-color) !important;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
