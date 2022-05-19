import { Header, MainContent, RequestCardContainer, TableNumber, RequestBody, FooterContent, StatusDiv } from "./styled"

import { MdDone } from "react-icons/md"
import { ImCross } from "react-icons/im"

import formatter from "../../utils/formatter"

const RequestCard = ({ demand }) => {

    const { table, date, price, quantity, status, requests, id } = demand;


    /* ------------------- COMO IMPORTAR O REQUESTCARD NA DASHBOARD!  ------------------- */

    /* 
    
    Como os pedidos devem chegar no componente:

    const demand1 = {
        table: 3,
        date: "13/05 - 12:23",
        totalPrice: 14.00,
        totalQuantity: 1,
        status: "accepted",
        requests : [{
            name: "Porção de batata frita média (2 pessoas)",
            aditionals: "Queijo Cheddar",
            image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
            quantity: 1,
        }]
    }

  const demand2 = {
    table: 4,
    date: "13/05 - 12:44",
    totalPrice: 64.00,
    totalQuantity: 4,
    status: "waiting",
    requests: [
      {
        name: "Porção de batata frita pequena (1 pessoa)",
        image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
        quantity: 1,
      },
      {
        name: "Onion Rings grande (4 pessoas)",
        image: "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2528-e3730288491dc14eb7f0e3e01673350e.jpg",
        quantity: 1,
      },
      {
        name: "Filé de Saint Peter",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkfMN2wX2YJyfIDscbu4rsj8RZ-9ns45mHw&usqp=CAU",
        quantity: 2,
      }
    ]
  }

  const demand3 = {
    table: 3,
    date: "13/05 - 12:23",
    totalPrice: 14.00,
    totalQuantity: 1,
    status: "rejected",
    requests : [{
      name: "Porção de batata frita média (2 pessoas)",
      aditionals: "Queijo Cheddar",
      image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
      quantity: 1,
    }]
  }

    Na Dashboard:

    <RequestCard demand={demand1} />
    <RequestCard demand={demand2} />
    <RequestCard demand={demand3} />
    */

    return (
        <RequestCardContainer>
            <Header>
                <div>
                    <span>#345</span>
                    <span>{date}</span>
                </div>
                <TableNumber>{table}</TableNumber>
            </Header>
            {requests?.map((request, index) => {

                const { name, image, quantity } = request

                return <MainContent key={index}>
                    <RequestBody>
                        <img src={image} alt={name} />
                        <div>
                            <strong>{name}</strong>
                            <span>Qtd.: {quantity}</span>
                        </div>
                    </RequestBody>
                </MainContent>
            })}
            <FooterContent>
                <div>
                    <span>Qtd.: {quantity}</span>
                    <span>{formatter.format(price)}</span>
                </div>
                <div>
                    {status === "waiting" ? (
                        <>
                            <StatusDiv small>
                                <ImCross />
                            </StatusDiv>
                            <StatusDiv accepted small>
                                <MdDone />
                            </StatusDiv>
                        </>
                    ) : status === "accepted" ? (
                        <StatusDiv accepted>
                            <MdDone />
                            <span>Aceito</span>
                        </StatusDiv>
                    ) : (
                        <StatusDiv >
                            <ImCross />
                            <span>Rejeitado</span>
                        </StatusDiv>
                    )}
                </div>
            </FooterContent>

        </RequestCardContainer>
    )
}
export default RequestCard