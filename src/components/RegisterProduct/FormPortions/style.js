import styled from "styled-components";

export const Portions = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0px;
  border: 1px solid var(--primary-color);
  margin-bottom: 20px;

  position: relative;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .addPortionContainer {
    width: 100%;
    height: auto;
    padding: 0px 15px;

    position: relative;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;

    .inputContainer {
      width: auto;
      height: auto;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      input {
        width: 100%;

        border-bottom: 1px solid var(--primary-color);
        background-color: transparent;

        &::placeholder {
          color: var(--primary-color-50);
        }
      }
    }

    .inputContainer__price {
      width: 170px;
    }

    .inputContainer__name {
      width: calc(98% - 194px);
      min-width: 230px;
    }

    .addPortionButton {
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 100%;
      background-color: transparent;

      font-size: 1.2rem;
      line-height: 1.5rem;
      font-weight: bold;

      &:hover {
        cursor: pointer;
        color: var(--primary-color-50);
      }
    }
  }
`;
