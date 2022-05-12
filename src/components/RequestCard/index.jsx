import { Header, RequestCardContainer, TableNumber } from "./styled"

const ResquestCard = ({ date, table, demand }) => {


    /* demand = [
        {
            name: "Batata Frita",
            description: "Batatas cortadas em palito, fritas e crocantes.",
            rating: 3,
            waitingTime: 13,
            nutritionalValue: {
                reference: "Porção de 100g - 1 unidade",
                calorie: "101 kcal = 426 kJ",
                carbohydrates: "7,7g",
                proteins: "4,3g",
                totalFats: "6,0g",
                saturatedFat: "0,5g",
                transFat: "0g",
                dietaryFiber: "7,0g",
                Sodium: "67mg"
            },
            additional: [{
                name: "Queijo Cheddar",
                sumPrice: 2
            },
            {
                name: "Molho Tártaro",
                sumPrice: 2
            }],
            product: [{
                name: "Porção de batata frita pequena (1 pessoa)",
                price: 8
            },
            {
                name: "Porção de batata frita média (2 pessoas)",
                price: 12
            },
            {
                name: "Porção de batata frita grande (4 pessoas)",
                price: 16
            }]
        },

    ] */


    return (
        <RequestCardContainer>
            <Header>
                <div>
                    <span>#345</span>
                    <span>Data/Horário</span>
                </div>
                <TableNumber>1</TableNumber>
                <div>
                    {demand.map((request) => {
                        return <div>

                        </div>
                    })}
                </div>
            </Header>

        </RequestCardContainer>
    )
}
export default ResquestCard