import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-family: "Noto Serif", serif;
  background-color: ${(props) =>
    props.bgBlack
      ? "var(--primary-color)"
      : props.bgYellow
      ? "var(--secondary-color)"
      : "var(--primary-color-50)"};
  color: ${(props) =>
    props.bgBlack
      ? "var(--secondary-color)"
      : props.bgYellow
      ? "var(--primary-color)"
      : "var(--terciary-color)"};
  font-size: 9px;
  padding: 5px;
  font-weight: ${(props) => (props.bolder ? "700" : "400")};
  height: ${(props) => (props.circle ? "42px" : "24px")};
  width: ${(props) =>
    props.width ? props.width : props.circle ? "42px" : "inherit"};
  border-radius: ${(props) => (props.circle ? "50%" : "15px")};
  border: none;
  box-shadow: ${(props) =>
    props.circle
      ? "inherit"
      : "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -4px 4px rgba(0, 0, 0, 0.25)"};

  &:hover {
    background-color: ${(props) =>
      props.bgBlack
        ? "var(--primary-color-50)"
        : props.bgYellow
        ? "var(--secondary-color-50)"
        : "var(--primary-color)"};
  }

  svg {
    height: 24px;
    width: 24px;
  }

  @media screen and (min-width: 1024px) {
    height: ${(props) => (props.circle ? "75px" : "42px")};
    width: ${(props) => (props.circle ? "75px" : "inherit")};
    font-size: 16px;
    padding: 10px;

    svg {
      height: 32px;
      width: 32px;
    }
  }
`;
