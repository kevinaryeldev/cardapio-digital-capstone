import Menu from "../../../../components/Menu";
import styled from "styled-components";

import BoxDemand from '../../../../components/BoxDemand'

const Container = styled.section`
  background-color: var(--primary-color);
  
`;
const BoxContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .LineDivBox{
    width:90%;
    border: 1px solid var(--primary-color);
    margin: 10px auto;
  }
`;
const Title = styled.h1`
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 32px;
  margin: 10px 0;
`;
const Subtitle = styled.h2`
  color: var(--terciary-color);
  font-size: 16px;
  margin-top: 15px; 
`;
const LineDiv = styled.hr`
  width: 100%;
  border: 1px dashed var(--secondary-color);
  margin: 10px 0;
`;
const ControlItems = styled.div`
width:100%;
background-color:var(--terciary-color);
display:flex;
align-items:center ;
flex-direction: column;
height: 190px;
  
  ul{
    width:90%;
    margin: 0 auto;
     
  }
  li{
    display:flex;
    justify-content: space-between;
  }
`
const TitleBox = styled.h3`
  margin: 10px 0;
  font-size:16px;
`
const AllRaised = styled.div`
width:100%;
background-color:var(--terciary-color);
display:flex;
align-items:center ;
flex-direction: column;
margin-top: 20px;
height:190px;
`


const StatisticsPage = () => {
  const listProducts = [{name:"Coca Coca lata",qtd:33},{name:"Coca Coca 2l",qtd:33},{name:"Coca Coca 600 ml",qtd:33}]
  return (
    <Container>
      <Menu></Menu>
      <BoxContent>
        <Title>Estatisticas</Title>
        <Subtitle>Pedidos</Subtitle>
        <LineDiv></LineDiv>
          <BoxDemand text={"Total"} icon={"Bidish"} qtd={102} color={"b"}/>
          <BoxDemand text={"Concluidos"} icon={"BsCheckSquare"} qtd={96} color={"g"}/>
          <BoxDemand text={"Rejeitados"} icon={"BsXSquare"} qtd={6} color={"r"}/>
          <BoxDemand text={"Em desenvolvimento"} icon={"BiLoaderCircle"} qtd={6} color={"y"}/>
        <Subtitle>Controle</Subtitle>
        <LineDiv></LineDiv>
        
        <ControlItems>
          <TitleBox>Controle de Itens</TitleBox>
          <h4>Bebidas</h4>
          <LineDiv className='LineDivBox'></LineDiv>
          <ul>
          {listProducts.map((item,index)=>(
          <li key={index}>
            <span >{item.name}</span> 
            <p>{item.qtd}un.</p>
          </li>
          ))}
          </ul>
        </ControlItems>
        <AllRaised>
          <TitleBox>Total Arrecadado</TitleBox>
          <LineDiv className='LineDivBox'></LineDiv>
        </AllRaised>

      </BoxContent>
    </Container>
  );
};
export default StatisticsPage;
