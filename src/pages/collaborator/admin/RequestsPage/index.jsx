import Menu from '../../../../components/Menu'
import RequestCard from '../../../../components/RequestCard'
import styled from 'styled-components'
import {RiSearch2Line} from 'react-icons/ri'

const Container = styled.main`
background-color:var( --primary-color-50);
height:100vh;
display:flex;
justify-content:space-between;
`
const BoxContent = styled.section`

`
const InputArea = styled.div`
width:100%;
`
const RequestsPage = () => {
    return(
        <Container>
            <Menu/>
            <BoxContent>
                <InputArea>
                    <RiSearch2Line></RiSearch2Line>
                    <input placeholder='Digite sua pesquisa aqui...'></input>
                </InputArea>
                <h2>Comandas</h2>
                <hr></hr>
                {/* <RequestCard/> */}
            </BoxContent>
        </Container>
    )
}
export default RequestsPage