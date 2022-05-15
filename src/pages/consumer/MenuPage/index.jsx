import { useEffect, useState } from 'react'
import {getProducts} from '../../../services/consumer/consumer'
import ProductCard from '../../../components/ProductCard'
import {FiSearch} from 'react-icons/fi'
import { Container, Content } from "./style"

const MenuPage = () => {

    const [products, setProducts] = useState()

    const renderProducts = (value) => {
      return (
        value.map(((product) => {
            return <ProductCard product={product} image={product.img} />    
          }
        ))
      )
    }

    useEffect(() => {
        const loadProducts = async() => {
            const response = await getProducts()
            setProducts(response)
        }
        loadProducts()
        return;
    }, [])

    return(
        <Container>
            <nav className='desktop--nav'>
                <a>Entradas</a>
                <a>Pratos principais</a>
                <a>Sobremesas</a>
                <a>Bebidas</a>
            </nav>
            <nav className='mobile--nav'>
                <div>
                  <FiSearch color={"#ffffff"} />
                  <input placeholder='Digite aqui sua pesquisa' />
                </div>
            </nav>
            <div className="foodsection">
                ENTRADAS
            </div>
            <Content>
              {!!products && renderProducts(products)}
            </Content>
        </Container>
    )
}
export default MenuPage