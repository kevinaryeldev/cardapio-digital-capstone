import Menu from "../../../../components/Menu";

import BoxDemand from "../../../../components/BoxDemand";
import {
  Container,
  BoxContent,
  ContentDemand,
  Title,
  Subtitle,
  LineDiv,
  ContentControl,
  ControlItems,
  TitleBox,
  AllRaised,
} from "./styles";

const StatisticsPage = () => {
  //Dados de exemplo
  const listProducts = [
    { name: "Coca Coca lata", qtd: 33 },
    { name: "Coca Coca 2l", qtd: 33 },
    { name: "Coca Coca 600 ml", qtd: 33 },
    { name: "Coca Coca lata", qtd: 33 }
  ];
  return (
    <Container>
      <Menu></Menu>
      <BoxContent>
        <Title>Estatísticas</Title>
        <Subtitle>Pedidos</Subtitle>
        <LineDiv></LineDiv>
        <ContentDemand>
          <BoxDemand text={"Total"} icon={"Bidish"} qtd={102} color={"b"} />
          <BoxDemand
            text={"Concluidos"}
            icon={"BsCheckSquare"}
            qtd={96}
            color={"g"}
          />
          <BoxDemand
            text={"Rejeitados"}
            icon={"BsXSquare"}
            qtd={6}
            color={"r"}
          />
          <BoxDemand
            text={"Em desenvolvimento"}
            icon={"BiLoaderCircle"}
            qtd={6}
            color={"y"}
          />
        </ContentDemand>
        <Subtitle>Controle</Subtitle>
        <LineDiv></LineDiv>
        <ContentControl>
          <ControlItems>
            <TitleBox>Controle de Itens</TitleBox>
            <h4>Bebidas</h4>
            <LineDiv className="LineDivBox"></LineDiv>
            <ul>
              {listProducts.map((item, index) => (
                <li key={index}>
                  <span>{item.name}</span>
                  <p>{item.qtd}un.</p>
                </li>
              ))}
            </ul>
          </ControlItems>
          <AllRaised>
            <TitleBox>Total Arrecadado</TitleBox>
            <LineDiv className="LineDivBox"></LineDiv>
          </AllRaised>
        </ContentControl>
      </BoxContent>
    </Container>
  );
};
export default StatisticsPage;
