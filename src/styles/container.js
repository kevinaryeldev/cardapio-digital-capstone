import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.background};

  @media (min-width: 1370px) {
    padding: 0px 100px;
  }
`;
