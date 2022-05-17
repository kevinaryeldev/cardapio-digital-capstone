import { useEffect, useState } from 'react'
import {getProducts} from '../../../services/consumer/consumer'
import ProductCard from '../../../components/ProductCard'
import Modal from '../../../components/Modal'
import {FiSearch} from 'react-icons/fi'
import { Container, Content, ModalContainer, ModalBody, ModalHeader } from "./style"

const MenuPage = () => {

    const [products, setProducts] = useState()
    const [productInModal, setProductInModal] = useState()
    const [imageInModal, setImageInModal] = useState()
    const [categoryMain, setCategoryMain] = useState("Entradas")
    const [shouldOpenProductModal, setShouldOpenProductModal] = useState(false)

    const renderProducts = (value, category) => {
      return (
        value.filter((product) => product.category === category).map(((product) => {
            return (<ProductCard 
                      product={product} 
                      image={product.img} 
                      click={() => handleOpenModal(product, product.img)}
                    />)   
          }
        ))
      )
    }

    const renderModal = (product, image) => {
      const extras = product.extras
      const portions = product.portions

      if(shouldOpenProductModal){
        return(
          <Modal 
            flex 
            width={"48rem"} 
            height={"36rem"} 
            state={shouldOpenProductModal}
            align="center"
            justify="center"
            padding="15px"
          >
            <ModalContainer>
              <ModalHeader>
                <span onClick={() => setShouldOpenProductModal(false)}>x</span>
                <div className='header'>
                  <div className='image-place'>
                    <img src={image} alt="product-pic" />
                    <p>estrelas</p>
                  </div>
                  <div className='product-description'>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.waitingTime}</p>
                    <p>Ver valor nutricional</p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className='product-adds'>
                  <h2>Adicionais</h2>
                  {!!extras  && extras.map((extra)=>{
                    return <p>{extra.name}..........{extra.price}</p>
                  })}
                </div>
                <div className='product-size'>
                  <h2>Porções</h2>
                  {!!portions && portions.map((portion) => {
                    return <p>{portion.name}..........{portion.price}</p>
                  })}
                  <button>Adicionar ao Pedido</button>
                </div>
              </ModalBody>
            </ModalContainer>
          </Modal>
        )
      }
    }

    const handleMainCategory = (category) => {
      setCategoryMain(category)
    }

    const handleOpenModal = (product, image) => {
      setShouldOpenProductModal(true)
      setProductInModal(product)
      setImageInModal(image)
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
        {!!productInModal && renderModal(productInModal, imageInModal)}
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