import {Link} from 'react-router-dom'
import {MdMenuBook} from 'react-icons/md'
import PaymentButton from '../../../components/Payment&Thanks/Button'
import { useRequests } from '../../../providers/requests/requests'
import {Container,
    Header,
    BoxHeader,
    Title,
    BoxGroupsRequest,
    GroupsRequestContent,
    Product,
    Time,
    BoxFooter} from './styles'
    
    
const CartPage = () => {
    const {requests} = useRequests()
    
    // const totalPrice = (array) => {
    //     console.log(array)
    //     array.reduce((a,b)=>{
    //         const extraPrice = b.extra.reduce((a,b)=>a+Number(b.price),0)
    //         const portionPrice = b.portions.reduce((a,b)=>a+Number(b.price),0)
    //         const totalSum = extraPrice + portionPrice

    //         return a + totalSum
    //     },0)
    //     console.log(totalPortion)

    // }
    
    return(
        <Container>
            <Header>
                <BoxHeader>
                <Title>Histórico de pedidos</Title>
                    <Link to='/menu'><MdMenuBook className='BtnMobile'></MdMenuBook></Link>
                    
                    <Link to='/menu' className='BtnDesktop'>Ver Cardapio</Link> 
                </BoxHeader>     
            </Header>
             
            {requests && requests.map((product)=>
                product.requests.map((demands)=>{
                    
                    return(
                    < BoxGroupsRequest >
                    {console.log(demands)}
                        <GroupsRequestContent>
                            <img src={demands.imageUrl} alt={demands.name} className="productImage"/>
                            <Product>
                            <h2>{demands.name}</h2>
                            
                            {demands.portions.map(({name,price},index)=>
                                <div key={index}>
                                    <p>Porçoes: {name}</p>
                                    </div> 
                            )}
                        
                            </Product>
                        </GroupsRequestContent>
                        <span>Preço: {demands.extrasPrice+demands.portionsPrice}</span> 
                    </BoxGroupsRequest>
                    )
                })
            )}
            <BoxFooter>
            <Time>Tempo de permanência: {"1:43:22s"}</Time>
            <PaymentButton/>
            </BoxFooter>
        </Container>
    )
}
export default CartPage


               