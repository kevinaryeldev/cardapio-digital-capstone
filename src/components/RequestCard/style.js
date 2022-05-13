import styled from "styled-components";

export const CardContainer = styled.li`
  width: 100%;
  height: 412px;
  max-width: 300px;
  padding-top: 10px;

  background-color: var(--terciary-color);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: "Noto Serif", serif;
  position: relative;

  color: var(--primary-color);

  .card--header {
    width: 100%;
    height: 3rem;
    padding: 10px;

    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .card--orderHorary {
      width: 75%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      h3 {
        font-size: 1rem;
        font-weight: bold;
      }

      p {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
  }

  .card--requests {
    padding: 20px 10px;
    list-style-type: none;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .card--request {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      position: relative;

      margin-bottom: 20px;

      .request--infos {
        width: 65%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        h4 {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        span {
          font-size: 0.8rem;
          font-weight: 400;
        }

        .line {
          border: none;
          background-color: var(--primary-color);
          height: 1px;
          width: 65%;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  }

  .card--status {
    padding: 10px;
    position: absolute;

    border-top: 3px solid var(--primary-color);

    width: 100%;
    background-color: var(--secondary-color);
    bottom: 0;

    border-radius: 0px 0px 15px 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .card--total {
      p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--primary-color);

        span {
          color: var(--primary-color);
        }
      }
    }

    .card--actions {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      button{
        
      }
    }
  }
`;
