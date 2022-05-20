import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--primary-color);
  max-width: 100vw;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const BoxContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    margin-left: 3rem;
  }
`;

export const Title = styled.h1`
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 32px;
  text-align: center;

  margin: 10px 0;
  padding-bottom: 14px;
  width: 85%;

  border-bottom: 2px dotted var(--secondary-color);
`;

export const Feedback = styled.div`
  width: 85%;
  min-height: 175px;
  padding: 6px;
  margin: 14px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: var(--terciary-color);
  border-radius: 15px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 92%;
  padding: 5px 15px;
  border-bottom: 1px solid black;
`;

export const Details = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 18px;
  text-align: justify;

  width: 90%;
  padding: 5px;
`;
