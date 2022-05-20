import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  padding: 30px 15px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background: linear-gradient(
    135deg,
    var(--primary-color-50),
    var(--primary-color)
  );
  color: var(--secondary-color);

  .profileSection {
    width: 100%;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }

    h2 {
      width: 100%;
      font-size: 1.2rem;
      padding-bottom: 10px;
      font-weight: bold;
      text-align: left;
      border-bottom: 1px solid var(--secondary-color);
    }

    .content {
      width: 100%;
      padding: 25px 15px;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .content__column {
      flex-direction: column;

      h6 {
        font-size: 0.9rem;
        color: var(--terciary-color);
        margin-bottom: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: calc(100% - 77px);
    min-height: 100vh;
    margin-left: 77px;
    margin-top: 0;
    padding: 30px 15px;
  }
`;

export const LogoArea = styled.section`
  width: auto;
  margin-right: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .imageContainer {
    width: 90px;
    height: 90px;
    padding: 5px;

    border-radius: 100%;
    border: 2px solid var(--secondary-color);

    background-color: var(--secondary-color);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      object-fit: contain;
    }

    margin-bottom: 10px;
  }

  button {
    font-size: 0.8rem !important;
    font-weight: bold !important;
    color: var(--primary-color);

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  label {
    width: 100%;
    padding: 5px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--secondary-color);

    font-size: 0.8rem;
    font-weight: bold;
    color: var(--primary-color);

    border-radius: 8px;
    box-shadow: 0px 2.29681px 2.29681px rgba(0, 0, 0, 0.25),
      inset 0px -2.29681px 2.29681px rgba(0, 0, 0, 0.25);

    &:hover {
      cursor: pointer;
      background-color: var(--secondary-color-50);
    }
  }
`;

export const NameArea = styled.form`
  width: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  input {
    width: 70%;
    padding: 0px 10px;
    background: none;
    border: 1px solid var(--secondary-color-50);
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
    margin-top: 10px;
    background: none;
    text-decoration: underline;

    &:hover {
      color: var(--secondary-color-50);
    }
  }
`;

export const ThemeArea = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  #category,
  select {
    cursor: pointer;
    width: 80%;
    padding: 5px 10px;

    border: none;
    color: var(--primary-color);
    background-color: var(--secondary-color);

    &::placeholder {
      color: var(--primary-color-50);
    }
  }

  button {
    background: none;
    text-decoration: underline;
    margin-left: 10px;

    &:first-child{
      margin-left: 0px;
    }

    &:hover {
      color: var(--secondary-color-50);
    }
  }

  button:nth-child(4), button:nth-child(5), button:nth-child(6) {
    background: var(--secondary-color);
    color: var(--primary-color);
    font-weight: 700;
    &:hover {
      background: var(--secondary-color-50);
    }
  }

  #table,
  input{
    background-color: transparent;
    border: 1px solid var(--primary-color-50);
    width: 100%;
    font-size: 16px;
    ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
  }
`;

export const SelectColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  input[type="color"] {
    width: 46px;
    height: 46px;
    margin-bottom: 15px;

    -webkit-appearance: none;
    border: none;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--terciary-color);
    text-decoration: none;
    margin: 10px;
  }
`;

export const ChangeCollorsButtonDiv = styled.div`
display:flex;
justify-content: center;
width: 100%;

button {
    width: 97px;
    text-align: center;
    line-height: 0px;
    /* background-color: var(--secondary-color); */
    /* color: var(--primary-color); */
    font-weight: 700;
    margin-top: 15px;
    margin-right: 15px;
    &:hover {
        /* color: var(--secondary-color-50); */
    }
}

`

export const ChangeEmail = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    cursor: pointer;
    width: 50%;
    margin-left: 5px;
    padding: 0px 5px;

    border: none;
    background-color: var(--secondary-color);
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-color);
  }

  button {
    background: none;
    text-decoration: underline;

    &:hover {
      color: var(--secondary-color-50);
    }
  }

  div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 16px;

    p {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      strong {
        margin-left: 5px;
      }
    }

    button {
      font-size: 16px;
    }
  }
`;

export const ChangePassword = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  button {
    background: none;
    text-decoration: underline;

    &:hover {
      color: var(--secondary-color-50);
    }
  }
`;

export const PasswordContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    max-width: 662px;
  }
`;

export const PasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span {
    color: var(--terciary-color);
    text-decoration: none;
    font-size: 15px;
    margin-bottom: 25px;
  }

  span:last-child {
    font-size: 10px;
    color: var(--error-color);
    margin: 10px 0px;
  }

  input {
    cursor: pointer;
    width: 100%;
    padding: 10px 10px;

    border: none;
    color: var(--primary-color);
    background-color: var(--secondary-color);

    &::placeholder {
      color: var(--primary-color-50);
    }
  }
`;
