import { useEffect, useState } from 'react'
import {getProducts} from '../../../services/consumer/consumer'
import ProductCard from '../../../components/ProductCard'
import Modal from '../../../components/Modal'
import {FiSearch} from 'react-icons/fi'
import { Container, Content } from "./style"

const MenuPage = () => {

    const [products, setProducts] = useState()
    const [categoryMain, setCategoryMain] = useState("Entradas")
    const [shouldOpenProductModal, setShoudlOpenProductModal] = useState(true)

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
          <Modal flex width={"45rem"} height={"30rem"} state={shouldOpenProductModal}>
            <div className='product-modal'>
              <div className='product-header'>
                <div>

                </div>
                <div></div>
              </div>
              <div className='product-body'>
                <div></div>
                <div></div>
              </div>
            </div>
          </Modal>
            <nav className='desktop--nav'>
                <div onClick={() => handleMainCategory("Entradas")}>Entradas</div>
                <div onClick={() => handleMainCategory("Pratos principais")}>Pratos principais</div>
                <div onClick={() => handleMainCategory("Sobremesas")}>Sobremesas</div>
                <div onClick={() => handleMainCategory("Bebidas")}>Bebidas</div>
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