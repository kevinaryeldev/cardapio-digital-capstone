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
  border-radius: 6px;

  .product--urlContainer {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 0px;

    label{
      margin-bottom: 20px;
    }

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
    align-items: center;
    padding-top: 0px;

    margin-bottom: 20px;

    input,
    select {
      cursor: pointer;
      width: 90%;
      padding: 10px 10px;

      border: 1px solid var(--primary-color);
      border-radius: 5px;
      background-color: transparent;

      margin-bottom: 15px;

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
