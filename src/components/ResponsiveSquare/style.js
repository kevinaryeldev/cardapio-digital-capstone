import styled from "styled-components";

export const DivSquare = styled.div`
  width: ${(props) => props.size};
  height: 0;
  padding-bottom: ${(props) => props.size};

  border-radius: ${(props) => (props.circle ? "100%" : "0")};
  position: relative;
`;

export const DivBlock = styled.div`
  border-radius: ${(props) => (props.circle ? "100%" : "0")};
  border: 1px solid
    ${(props) => props.color.border || "var(--terciary-color-50)"};
  box-shadow: 0px 2px 4px
    ${(props) => props.color.shadow || "var(--secondary-color-50)"};
  position: absolute;
  text-align: center;
  background-color: ${(props) =>
    props.color.background || "var(--secondary-color)"};
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivCentered = styled.div`
  width: ${(props) => props.width || "80%"};
  color: ${(props) => props.color.text || "var(--terciary-color)"};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
