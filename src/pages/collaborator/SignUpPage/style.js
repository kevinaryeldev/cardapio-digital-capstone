import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1170px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ddbc8b;

  @media (min-width: 1370px) {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background-color: #ddbc8b;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  padding: 70px 15px;

  max-width: 700px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  background: linear-gradient(135deg, #485d5e, #21262d);

  font-family: "Inter", sans-serif !important;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    color: #ddbc8b;

    margin-bottom: 28px;
  }

  @media (min-width: 1370px) {
    padding: 70px 0px;
    box-shadow: none;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const ImageContainer = styled.section`
  display: none;

  @media (min-width: 1370px) {
    padding: 30px;
    width: 470px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PasswordContainer = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
