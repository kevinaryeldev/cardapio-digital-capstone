import {
  Header,
  MainContent,
  RequestCardContainer,
  TableNumber,
  RequestBody,
  FooterContent,
  StatusDiv,
  MainContainer,
} from "./styled";

import { MdDone } from "react-icons/md";
import { ImCross } from "react-icons/im";

import formatter from "../../utils/formatter";
import { useRequests } from "../../providers/requests/requests";

const RequestCard = ({ demand, showRequests, setShowRequests }) => {
  const { table, date, price, quantity, status, requests, id } = demand;
  const { sendEditRequestData, sendDeleteRequestData } = useRequests();

  const requestTime = date.slice(11, 16);
  const requestDate = date.slice(0, 10).split("-");

  const requestDay = requestDate[2];
  const requestMounth = requestDate[1];
  const requestYear = requestDate[0];

  const requestDateFormatted = `${requestDay}/${requestMounth}/${requestYear}`;

  const requestsFilters = (request) => {
    let response = [];

    const { portions, extras } = request;

    const portionsSort = portions.sort((a, b) => a.name - b.name);
    let newPortions = [];
    let currentQuantityPortions = 1;

    for (let i = 1; i < portionsSort.length; i++) {
      if (portionsSort[i].name !== portionsSort[i - 1].name) {
        const newPortion = {
          name: portionsSort[i - 1].name,
          price: portionsSort[i - 1].price,
          productName: portionsSort[i - 1].productName,
          quantity: currentQuantityPortions,
        };
        currentQuantityPortions = 1;
        newPortions.push(newPortion);
      } else {
        currentQuantityPortions++;
      }
    }

    const newPortion = {
      name: portionsSort[portionsSort.length - 1].name,
      price: portionsSort[portionsSort.length - 1].price,
      productName: portionsSort[portionsSort.length - 1].productName,
      quantity: currentQuantityPortions,
    };
    newPortions.push(newPortion);

    if (extras) {
      const extrasSort = extras?.sort((a, b) => a.name - b.name);
      let newExtras = [];
      console.log(extrasSort);
      let currentQuantityExtras = 1;

      for (let i = 1; i < extrasSort.length; i++) {
        if (extrasSort[i].name !== extrasSort[i - 1].name) {
          const newExtra = {
            name: extrasSort[i - 1].name,
            price: extrasSort[i - 1].price,
            productName: extrasSort[i - 1].productName,
            quantity: currentQuantityExtras,
          };
          currentQuantityExtras = 1;
          newExtras.push(newExtra);
        } else {
          currentQuantityExtras++;
        }
      }

      const newExtra = {
        name: extrasSort[extrasSort.length - 1].name,
        price: extrasSort[extrasSort.length - 1].price,
        productName: extrasSort[extrasSort.length - 1].productName,
        quantity: currentQuantityExtras,
      };
      newExtras.push(newExtra);

      console.log(newExtras);
      response = [newPortions, newExtras];
      return response;
    }

    response = [newPortions];

    return response;
  };

  const removeItem = async () => {
    const filter = showRequests.filter((product) => product !== demand)
    setShowRequests(filter)
    sendDeleteRequestData(id)
  }

  return (
    <RequestCardContainer>
      <Header>
        <div>
          <span>#{id}</span>
          <span>
            {requestTime} - {requestDateFormatted}
          </span>
        </div>
        <TableNumber>{table}</TableNumber>
      </Header>
      <MainContainer>
        {requests?.map((request, index) => {
          const { name, imageUrl } = request;

          return (
            <MainContent key={index}>
              <RequestBody>
                <img src={imageUrl} alt={name} />
                <div>
                  <strong>{name}</strong>

                  <ul className="portionsContainer">
                    {requestsFilters(request)[0].map(({ name, quantity }) => (
                      <li key={"portion_" + name}>
                        <p>
                          {name}
                          <span>x{quantity}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                  <ul className="extrasContainer">
                    {requestsFilters(request)[1]?.map(({ name, quantity }) => (
                      <li key={"extra_" + name}>
                        <p>
                          {name}
                          <span>x{quantity}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr />
              </RequestBody>
            </MainContent>
          );
        })}
      </MainContainer>
      <FooterContent>
        <div>
          <span>Qtd.: {quantity}</span>
          <span>{formatter.format(price)}</span>
        </div>
        <div>
          {status === "opened" ? (
            <>
              <StatusDiv
                small
                onClick={() => {
                  sendEditRequestData({ status: "rejected" }, id);
                }}
              >
                <ImCross />
              </StatusDiv>
              <StatusDiv
                accepted
                small
                onClick={() => {
                  sendEditRequestData({ status: "accepted" }, id);
                }}
              >
                <MdDone />
              </StatusDiv>
            </>
          ) : status === "accepted" ? (
            <StatusDiv accepted onClick={() => removeItem()}>
              <MdDone />
              <span>Aceito</span>
            </StatusDiv>
          ) : (
            <StatusDiv onClick={() => removeItem()}>
              <ImCross />
              <span>Rejeitado</span>
            </StatusDiv>
          )}
        </div>
      </FooterContent>
    </RequestCardContainer>
  );
};
export default RequestCard;
