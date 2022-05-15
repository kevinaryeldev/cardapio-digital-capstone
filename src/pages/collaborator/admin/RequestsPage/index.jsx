import Menu from "../../../../components/Menu";
import RequestCard from '../../../../components/RequestCard'
import { RiSearch2Line } from "react-icons/ri";
import { BsCheckSquare, BsXSquare } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";

import {Container,
    BoxContent,
    InputArea,
    Title,
    LineDiv,
    BoxNav,
    BtnAccepted,
    BtnNotAccepted,
    BtnInLoad,
    BoxCardReq} from './styles'

import { useRequests } from "../../../../providers/requests/requests";

const RequestsPage = () => {
    const {requests} = useRequests()
    
  return (
    <Container>
      <Menu />
      <BoxContent>
        <InputArea>
          <RiSearch2Line></RiSearch2Line>
          <input placeholder="Digite sua pesquisa aqui..."></input>
        </InputArea>
        <Title>Comandas</Title>
        <LineDiv></LineDiv>
        <BoxNav>
          <BtnAccepted>
            <BsCheckSquare />
            &#35;345
          </BtnAccepted>
          <BtnNotAccepted>
            <BsXSquare />
            &#35;346
          </BtnNotAccepted>
          <BtnInLoad>
            <BiLoaderCircle />
            &#35;347
          </BtnInLoad>
        </BoxNav>
        <BoxCardReq>
        {requests.map((item,index)=>
            <RequestCard key={index} demand={item}/>
        )}
        </BoxCardReq>
      </BoxContent>
    </Container>
  );
};
export default RequestsPage;
