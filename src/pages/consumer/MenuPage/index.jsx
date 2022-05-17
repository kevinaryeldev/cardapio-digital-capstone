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
          <Modal 
            flex 
            width={"45rem"} 
            height={"30rem"} 
            state={shouldOpenProductModal}
            align="center"
            justify="center"
            padding="15px"
          >
            <div className='product-modal'>
              <div className='product-header'>
                <div>
                  {/* <img src={product.img} alt="product-image" /> */}
                  <div>imagem</div>
                  <div>estrelas</div>
                </div>
                <div>
                  <h1>Batata frita</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor praesentium asperiores dolorem delectus recusandae. Eveniet dolor nostrum, illum velit enim corrupti ut repudiandae, odit quae nihil quos dignissimos error?</p>
                  <span>Ver valor nutricional</span>
                </div>
              </div>
              <div className='product-body'>
                <div>
                  <h2>Adicionais</h2>
                  <div>Queijo chedar</div>
                  <div>Molho tártaro</div>
                </div>
                <div>
                  <h2>Porções</h2>
                  <div>Porção de batata frita pequena</div>
                  <div>Porção de batata frita pequena</div>
                  <div>Porção de batata frita pequena</div>
                  <button>Adicionar ao Pedido</button>
                </div>
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