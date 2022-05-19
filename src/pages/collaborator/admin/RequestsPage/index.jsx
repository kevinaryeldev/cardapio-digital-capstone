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
    Btnfilter,
    BoxCardReq} from './styles'

import { useRequests } from "../../../../providers/requests/requests";
import { useState } from "react";

const RequestsPage = () => {
    
    const {requests} = useRequests()
    const [showRequests, setShowRequests] = useState(requests)

    const getInput = (valueInput) => {
        const filtered = requests.filter((item)=> String(item.table) === valueInput ? item : null)
        valueInput === '' ? setShowRequests(requests)
        :
        setShowRequests(filtered)
    }
   
    const filter = (valueFilter) => {
        const filtered = requests.filter((item)=> item.status === valueFilter ? item : null)
        valueFilter === "all" ? setShowRequests(requests) : setShowRequests(filtered)
    }
    
  return (
    <Container>
      <Menu />
      <BoxContent>
        <InputArea>
          <RiSearch2Line></RiSearch2Line>
          <input placeholder="Digite sua pesquisa aqui..." onChange={(e)=>getInput(e.target.value)}></input>
        </InputArea>
        <Title>Comandas</Title>
        <LineDiv></LineDiv>
        <BoxNav>
          <Btnfilter onClick={()=>filter("all")}>
            Todos
          </Btnfilter>
          <Btnfilter color={'g'} onClick={()=>filter("accepted")}>
            <BsCheckSquare />
            &#35;345
          </Btnfilter>
          <Btnfilter  color={'r'} onClick={()=>filter("rejected")}>
            <BsXSquare />
            &#35;346
          </Btnfilter>
          <Btnfilter color={'y'} onClick={()=>filter("waiting")}>
            <BiLoaderCircle />
            &#35;347
          </Btnfilter>
          
        </BoxNav>
        <BoxCardReq>
        {showRequests?.length === 0 ? <aside>Nenhuma Comanda encontrada</aside> : showRequests?.map((item,index)=>
            <RequestCard key={index} demand={item}/>
        )}
        </BoxCardReq>
      </BoxContent>
    </Container>
  );
};
export default RequestsPage;
