import styled from "styled-components";

export const CartItemContainer = styled.li`
  list-style: none;
  width: 100%;
  border: 1px solid var(--primary-color);
  box-sizing: border-box;
  display: flex;
  gap: 30px;
  padding: 10px 0;
`;

export const LeftCartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px;
  gap: 10px;

  img {
    width: 277px;
    height: 186px;
  }
`;

export const StarRatingCart = styled.div`
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
`;

export const RightCartItemContainer = styled.div`
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  font-family: "Noto Serif", serif;
  h2 {
    font-weight: 600;
    font-size: 32;
  }
  h3 {
    font-size: 27px;
    font-weight: 600;
  }
  a {
    text-decoration: underline;
    font-weight: 500;
    font-size: 18px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
`;
