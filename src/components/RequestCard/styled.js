import styled from "styled-components";

export const RequestCardContainer = styled.div`
  font-family: "Noto Serif";
  background-color: var(--terciary-color);
  width: 400px;
  height: 500px;
  overflow-y: auto;
  border-radius: 15px;
  padding: 20px 31px 28px 20px;
  margin: 10px 0;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: var(--primary-color-50);
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--primary-color-50);
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color-50);
    border-radius: 10px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 500px;
    //margin: 65px 89px 50px 89px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  div {
    display: flex;
    flex-direction: column;

    span {
      color: var(--primary-color);
      font-size: 13px;
    }

    span:first-child {
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      span {
        font-size: 16px;
      }

      span:first-child {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
`;

export const TableNumber = styled.div`
  background-color: var(--secondary-color);
  width: 38px;
  height: 38px;
  color: var(--primary-color);
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  text-align: center;
  line-height: 38px;
  font-size: 16px;

  @media screen and (min-width: 1024px) {
    height: 54px;
    width: 54px;
    line-height: 54px;
    font-size: 22px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  padding: 14px 0;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export const MainContainer = styled.section`
  width: 100%;
  height: calc(100% - 119px);
  max-height: calc(100% - 119px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 1024px) {
    height: calc(100% - 128px);
    max-height: calc(100% - 128px);
  }
`;

export const RequestBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  div {
    margin-left: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    border-bottom: 1px solid var(--primary-color);

    strong {
      width: 100%;
      text-align: left;
      font-size: 13px;
    }

    span {
      font-size: 10px;
    }
  }

  hr {
    width: calc(100% - 68px);
    height: 1px;
    border: none;
    background-color: var(--primary-color);

    position: absolute;
    bottom: 14px;
    left: 68px;
  }

  .portionsContainer, .extrasContainer {
    font-size: 0.7rem;
    font-weight: 400;
    list-style-type: none;
    padding: 10px 0px;

    p {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    span {
      font-size: 0.7rem;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      margin-left: 10px;

      strong {
        font-size: 16px;
      }

      span {
        font-size: 12px;
      }
    }
  }
`;

export const FooterContent = styled.div`
  padding-top: 15px;
  font-size: 10px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    span:first-child {
      margin-bottom: 4px;
    }
  }

  div:last-child {
    justify-content: space-around;
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    padding: 10px 9px 11px 13px;
    font-size: 12px;

    span:first-child {
      margin-bottom: 5px;
    }
  }
`;

export const StatusDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  font-weight: 700;
  font-size: 13px;
  height: 36px;
  width: ${(props) => (props.small ? "36px" : "106px")};
  margin-left: ${(props) => (props.small && props.accepted ? "18px" : "0px")};
  background-color: ${(props) =>
    props.accepted ? "var(--positive-color-50)" : "var(--negative-color-50)"};
  color: ${(props) =>
    props.accepted ? "var(--positive-color)" : "var(--negative-color)"};
  border: ${(props) =>
    props.accepted
      ? "1px solid var(--positive-color)"
      : "1px solid var(--negative-color)"};
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;
