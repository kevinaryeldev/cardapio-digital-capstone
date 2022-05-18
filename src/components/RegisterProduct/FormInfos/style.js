import styled from "styled-components";

export const Infos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;

  margin-bottom: 20px;
  border: 1px solid var(--primary-color);

  .product--urlContainer {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 0px;

    .product--imageContainer {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    input {
      width: 100%;
      padding: 5px 10px;

      margin-bottom: 10px;

      border: 1px solid var(--primary-color);
      background-color: transparent;
    }
  }

  .product--infosContainer {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 0px;

    margin-bottom: 20px;

    input,
    select {
      cursor: pointer;
      width: 100%;
      padding: 5px 10px;

      border: 1px solid var(--primary-color);
      background-color: transparent;

      margin-bottom: 10px;

      &::placeholder {
        color: var(--primary-color-50);
      }
    }

    option {
      background-color: var(--secondary-color-50);
      color: var(--primary-color);
    }
  }
`;
