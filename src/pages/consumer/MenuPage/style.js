import styled from "styled-components";

export const MenuContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  min-width: 500px;
`;

export const CartContainer = styled.div`
  background-color: var(--secondary-color);
  height: 740px;
  width: 740px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 30px;
`;

export const CartItemsContainer = styled.div``;

export const ButtonRequest = styled.button`
  font-family: "Noto Serif", serif;
  font-size: 23px;
  padding: 19px 29px;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-radius: 24px;
  width: fit-content;
`;
export const CartList = styled.ul`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  margin-bottom: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
