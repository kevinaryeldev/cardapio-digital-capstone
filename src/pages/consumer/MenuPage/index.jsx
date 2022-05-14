import { useEffect, useState } from 'react'
import {getProducts} from '../../../services/consumer/consumer'
import ProductCard from '../../../components/ProductCard'
import { Container, Content } from "./style"

const MenuPage = () => {

    const [products, setProducts] = useState()

    const renderProducts = (value) => {
      return (
        value.map(((product) => {
            return <ProductCard product={product} />    
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
            <header>
                <a>Entradas</a>
                <a>Pratos principais</a>
                <a>Sobremesas</a>
                <a>Bebidas</a>
            </header>
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