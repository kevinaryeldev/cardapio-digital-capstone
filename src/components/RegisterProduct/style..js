import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box !important;
  width: 100% !important;

  max-width: 916px;

  padding: 0px 15px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--secondary-color);
  color: var(--primary-color);

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    padding: 10px 100px;
  }

  .currentStage {
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const List = styled.ul`
  width: 100%;
  padding: 0px 30px;
  height: auto;

  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Item = styled.li`
  width: 100%;
  padding: 5px 10px;

  color: var(--primary-color);

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  background-color: transparent;

  margin-bottom: 10px;

  .name {
    font-size: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 5px;
    margin-right: 5px;
  }

  .price {
    font-size: 1rem;
    font-weight: bold;
  }

  .removeButton {
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: var(--primary-color-50);
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ChangeStage = styled.button`
  width: 48px;
  height: 32px;

  background-color: transparent;

  font-size: 1.5rem;
  font-weight: bold;

  position: absolute;
  bottom: 0;
  ${(props) => props.right && "right: 7.5px;"};
  ${(props) => props.left && "left: 7.5px;"};

  &:hover {
    cursor: pointer;
    transition: transform 300ms;
    ${(props) => props.right && "transform: translateX(8px);"};
    ${(props) => props.left && "transform: translateX(-8px);"};
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;

  background: none;

  &:hover {
    color: var(--primary-color-50);
  }
`;
