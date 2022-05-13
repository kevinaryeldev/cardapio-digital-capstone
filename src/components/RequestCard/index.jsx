import { Header, MainContent, RequestCardContainer, TableNumber, RequestBody, FooterContent, StatusDiv } from "./styled"

import { MdDone } from "react-icons/md"
import { ImCross } from "react-icons/im"

const ResquestCard = ({ demand }) => {

    const { table, date, totalPrice, totalQuantity, status, requests } = demand

    return (
        <RequestCardContainer>
            <Header>
                <div>
                    <span>#345</span>
                    <span>{date}</span>
                </div>
                <TableNumber>{table}</TableNumber>
            </Header>
            {requests.map((request, index) => {

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
                    <span>Qtd.: {totalQuantity}</span>
                    <span>R$ {totalPrice}</span>
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
export default ResquestCard