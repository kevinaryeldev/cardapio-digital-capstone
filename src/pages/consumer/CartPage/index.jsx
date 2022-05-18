import {Link} from 'react-router-dom'
import styled from 'styled-components'
import PaymentButton from '../../../components/Payment&Thanks/Button'
const Container = styled.main`
max-width:100vw;
min-height:100vh;
background-color: var(--primary-color);
.BtnSeeMenu{
    width:200px;
    height:50px;
    font-size:24px;
    font-weight:700;
    background-color: var(--primary-color);
    color:var(--terciary-color);
    display:flex;
    align-items:center;
    justify-content: center;
}
`
const Header = styled.div`
background-color:var(--secondary-color);
height:70px;
width:100vw;

`
const BoxHeader = styled.div`
width:80%;
height:70px;
margin: 0 auto;
display:flex;
align-items: center;
justify-content:space-between;  
`
const Title = styled.h1`
font-size:24px;
font-weight:700;
`
const BoxGroupsRequest = styled.ul`
width:80%;
margin:10px auto;
`
const GroupsRequestContent = styled.li`
width:100%;
height:200px;
border:1px solid var(--secondary-color);
position:relative;
display:flex;
margin-bottom:10px;
span{
    position:absolute;
    font-size:16px;
    bottom:5px;
    right:5px;
    color: var(--terciary-color);
}
`

const Time = styled.span`
color:var(--terciary-color);
`
const BoxFooter = styled.footer`
display:flex;
width:90%;
align-items:center;
justify-content:space-between;
margin:0 10px 10px auto;

`
const CartPage = () => {
    
    return(
        <Container>
            <Header>
                <BoxHeader>
                <Title>Histórico de pedidos</Title>
                <Link to='/menu' className='BtnSeeMenu'>Ver Cardapio</Link>  
                </BoxHeader>     
            </Header>
             
            <BoxGroupsRequest>
                <GroupsRequestContent>
                <span>Total:R$ {"xx,xx"}</span>   
                </GroupsRequestContent>
                <GroupsRequestContent>
            <span>Total:R$ {"xx,xx"}</span>   
                </GroupsRequestContent>
            </BoxGroupsRequest>
            <BoxFooter>
            <Time>Tempo de permanência: {"1:43:22s"}</Time>
            <PaymentButton/>
            </BoxFooter>
        </Container>
    )
}
export default CartPage