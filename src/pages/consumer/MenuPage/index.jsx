import { useEffect, useState } from 'react'
import {getProducts} from '../../../services/consumer/consumer'
import ProductCard from '../../../components/ProductCard'
import {FiSearch} from 'react-icons/fi'
import { Container, Content } from "./style"

const MenuPage = () => {

    const [products, setProducts] = useState()
    const [categoryMain, setCategoryMain] = useState("Entradas")

    const renderProducts = (value, category) => {
      return (
        value.filter((product) => product.category === category).map(((product) => {
            return <ProductCard product={product} image={product.img} />    
          }
        ))
      )
    }

    const handleMainCategory = (category) => {
      setCategoryMain(category)
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
                <div onClick={() => handleMainCategory("Entradas")}>Entradas</div>
                <div onClick={() => handleMainCategory("Pratos principais")}>Pratos principais</div>
                <div onClick={() => handleMainCategory("Sobremesas")}>Sobremesas</div>
                <div onClick={() => handleMainCategory("Bebidas")}>Bebidas</div>
            </nav>
            <nav className='mobile--nav'>
                <div>
                  <FiSearch color={"#ffffff"} />
                  <input placeholder='Digite aqui sua pesquisa' />
                </div>
            </nav>
            <div className="foodsection">
                {categoryMain}
            </div>
            <Content>
              {!!products && renderProducts(products, categoryMain)}
            </Content>
        </Container>
    )
}
export default MenuPage