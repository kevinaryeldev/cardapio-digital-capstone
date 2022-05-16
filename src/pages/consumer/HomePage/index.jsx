import {IoIosRestaurant} from 'react-icons/io'
import Button from "../../../components/Button"
import SmartMenu from '../../../assets/img/smart-menu-teste.png'
import { Container } from "./style"
import { useHistory } from 'react-router-dom'

const HomePage = () => {
    const history = useHistory()

    const  handleRedirect = (path) =>{
        return history.push(path)
    }

    return(
        <Container>
            <div className='title'>
                <h1>Cardápio Digital</h1>
                <IoIosRestaurant color='var(--secondary-color-50)' size={50} />
            </div>
            {/* <img src={SmartMenu} alt="smart-logo" /> */}
            <p>Ágil | Sustentável | Objetivo</p>
            <div>
                <Button onClick={()=>handleRedirect("/menu")} bgYellow>Abrir</Button>
            </div>
        </Container>
    )
}
export default HomePage