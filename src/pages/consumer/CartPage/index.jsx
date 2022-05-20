import { Link } from "react-router-dom";
import styled from "styled-components";

import { MdMenuBook } from "react-icons/md";
import PaymentButton from "../../../components/Payment&Thanks/Button";
import { useRequests } from "../../../providers/requests/requests";
import { useState } from "react";
import formatter from "../../../utils/formatter";
import { useEffect } from "react";

const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--primary-color);
  .BtnDesktop {
    display: none;
  }
  .BtnMobile {
    display: block;
    font-size: 32px;
    color: var(--primary-color-50);
  }
  .productImage {
    width: 161px;
    height: 108px;
    margin-right: 70px;
  }
  @media (min-width: 1024px) {
    .BtnDesktop {
      width: 200px;
      height: 50px;
      font-size: 24px;
      font-weight: 700;
      background-color: var(--primary-color);
      color: var(--terciary-color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .BtnMobile {
      display: none;
    }
  }
`;
const Header = styled.div`
  background-color: var(--secondary-color);
  height: 70px;
  width: 100vw;
`;
const BoxHeader = styled.div`
  width: 80%;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;
const BoxGroupsRequest = styled.ul`
  width: 90%;
  margin: 10px auto;
  border: 1px solid var(--secondary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 30px;
  span {
    position: absolute;
    font-size: 16px;
    color: var(--terciary-color);
    bottom: 5px;
    right: 10px;
  }
  @media (min-width: 1024px) {
    width: 80%;

    margin: 30px auto;
    padding: 0;
  }
`;
const GroupsRequestContent = styled.li`
  width: 90%;
  flex-direction: column;
  margin: 10px auto;
  display: flex;
  color: var(--secondary-color);

  @media (min-width: 1024px) {
    height: 166px;
    display: flex;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
  }
`;
const Product = styled.div`
  display: flex;
  flex-direction: column;
`;
const Time = styled.span`
  color: var(--terciary-color);
`;
const BoxFooter = styled.footer`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px 10px auto;
`;

const CartPage = () => {
  const [productsCart, setProductsCart] = useState([]);
  const { getRequestData, requests } = useRequests();

  useEffect(() => {
    const loadProducts = async () => {
      const response = await getRequestData();
      setProductsCart(response);
    };
    loadProducts();
    return;
  }, []);

  return (
    <Container>
      <Header>
        <BoxHeader>
          <Title>Histórico de pedidos</Title>
          <Link to="/menu">
            <MdMenuBook className="BtnMobile"></MdMenuBook>
          </Link>

          <Link to="/menu" className="BtnDesktop">
            Ver Cardapio
          </Link>
        </BoxHeader>
      </Header>
      {requests.length > 0 &&
        requests.map((product) => (
          <BoxGroupsRequest key={product.id}>
            {product.requests.map((req, index) => (
              <GroupsRequestContent key={index}>
                <img
                  src={req.imageUrl}
                  alt="imagem do produto"
                  className="productImage"
                />
                <Product>
                  <h2>{req.name}</h2>

                  {req.portions.map(({ name, price }, index) => (
                    <div key={index}>
                      <p>Porçoes: {name}</p>
                      <span> {formatter.format(price)} </span>
                    </div>
                  ))}
                </Product>
              </GroupsRequestContent>
            ))}
            <span>Preço: {formatter.format(product.price)} </span>
          </BoxGroupsRequest>
        ))}
      <BoxFooter>
        <Time>Tempo de permanência: {"1:43:22s"}</Time>
        <PaymentButton />
      </BoxFooter>
    </Container>
  );
};
export default CartPage;
