import Menu from "../../../../components/Menu";
import RequestCard from "../../../../components/RequestCard";
import { RiSearch2Line } from "react-icons/ri";
import { BsCheckSquare, BsXSquare } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";

import {
  Container,
  BoxContent,
  InputArea,
  Title,
  LineDiv,
  BoxNav,
  Btnfilter,
  BoxCardReq,
} from "./styles";

import { useRequests } from "../../../../providers/requests/requests";
import { useState } from "react";
import { useEffect } from "react";

const RequestsPage = () => {
  const { requests } = useRequests();
  const [showRequests, setShowRequests] = useState(requests);

  useEffect(() => {
    setShowRequests(requests);
  }, [requests]);

  const getInput = (valueInput) => {
    const filtered = requests.filter((item) =>
      String(item.table) === valueInput
        ? item
        : null || String(item.id) === valueInput
        ? item
        : null
    );
    valueInput === "" ? setShowRequests(requests) : setShowRequests(filtered);
  };

  const filter = (valueFilter) => {
    const filtered = requests.filter((item) =>
      item.status === valueFilter ? item : null
    );
    valueFilter === "all"
      ? setShowRequests(requests)
      : setShowRequests(filtered);
  };

  return (
    <Container>
      <Menu />
      <BoxContent>
        <InputArea>
          <RiSearch2Line></RiSearch2Line>
          <input
            placeholder="Digite o nº da mesa ou do pedido aqui..."
            onChange={(e) => getInput(e.target.value)}
          ></input>
        </InputArea>
        <Title>Comandas</Title>
        <LineDiv></LineDiv>
        <BoxNav>
          <Btnfilter onClick={() => filter("all")}>Todos</Btnfilter>
          <Btnfilter color={"g"} onClick={() => filter("accepted")}>
            <BsCheckSquare />
          </Btnfilter>
          <Btnfilter color={"r"} onClick={() => filter("rejected")}>
            <BsXSquare />
          </Btnfilter>
          <Btnfilter color={"y"} onClick={() => filter("opened")}>
            <BiLoaderCircle />
          </Btnfilter>
        </BoxNav>
        <BoxCardReq>
          {showRequests?.length === 0 ? (
            <aside>Nenhuma Comanda encontrada</aside>
          ) : (
            showRequests?.map((item, index) => (
              <RequestCard key={index} demand={item} showRequests={showRequests} setShowRequests={setShowRequests}/>
            ))
          )}
        </BoxCardReq>
      </BoxContent>
    </Container>
  );
};
export default RequestsPage;
