import styled from "styled-components";

export const CardContainer = styled.li`
  width: 100%;
  max-width: 575px;

  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid var(--secondary-color); */
  margin-bottom: 15px;

  .card--product {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .product--imageContainer {
      width: 40%;
      margin-right: 5%;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 70%;
        height: 150px;
        object-fit: contain;
      }
    }

    .product--description {
      width: 55%;
      padding-top: 20px;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      color: var(--secondary-color);

      h3 {
        max-width: 100%;
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        margin-bottom: 10px;

        @media (min-width: 400px) {
          font-size: 1.5rem;
        }
      }

      p {
        max-width: 100%;
        font-weight: 400;
        font-size: 0.8rem;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        @media (min-width: 400px) {
          font-size: 1rem;
        }
      }
    }
  }
  .card--extras {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    div > button {
      margin-left: 30px;
      margin-top: 15px;
    }

    .card--ratingContainer {
      width: 40%;
      margin-right: 5%;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 15%;
        height: 32px;
        margin-right: 5px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    button + button {
      margin: 1rem;
    }

    button {
      height: 32px;
      padding: 0px 20px;

      border: none;
      background-color: var(--primary-color-50);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px -4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      color: var(--terciary-color-50);

      &:hover {
        cursor: pointer;
        background-color: var(--secondary-color);
        color: var(--terciary-color);
      }
    }
  }
  /* 
  .card--graphics {
    margin-right: 20px;
    width: 40%;
    max-width: 150px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .card--imageContainer {
    width: 100%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    img {
      width: 100%;
      object-fit: contain;

      border: 1px solid var(--primary-color);
    }
  }

  .card--ratingContainer {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 15%;
      margin-right: 5px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .card--description {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    color: var(--secondary-color);

    .description--text {
      padding-top: 20px;
      width: 100%;
      height: 60%;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    h3 {
      max-width: 100%;
      font-weight: bold;
      font-size: 1rem;
      text-transform: uppercase;

      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      margin-bottom: 10px;
    }

    p {
      max-width: 100%;
      font-weight: 400;
      font-size: 0.8rem;

      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    button {
      height: 36px;
      padding: 0px 10px;

      border: none;
      background-color: var(--primary-color-50);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px -4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      color: var(--terciary-color-50);

      &:hover {
        cursor: pointer;
        background-color: var(--secondary-color);
        color: var(--terciary-color);
      }
    }

    @media (min-width: 600px) {
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  } */
`;
