import { useEffect, useState } from 'react'
import {getProducts} from '../../../services/consumer/consumer'
import ProductCard from '../../../components/ProductCard'
import Modal from '../../../components/Modal'
import {FiSearch} from 'react-icons/fi'
import { Container, Content, ModalContainer, ModalBody, ModalHeader } from "./style"
import { ButtonRequest, CartContainer, CartList, MenuContainer } from "./style";
import CartItem from "../../../components/CartItem";
import { useRequests } from "../../../providers/requests/requests";

const MenuPage = () => {

    const { sendRequestData } = useRequests()

    const [products, setProducts] = useState()
    const [productInModal, setProductInModal] = useState()
    const [productsInCart, setProductsInCart] = useState([])
    const [openCart, setOpenCart] = useState(false);
    const [shouldOpenProductModal, setShouldOpenProductModal] = useState(false)
    const [categoryMain, setCategoryMain] = useState("Entradas")

    const handleMainCategory = (category) => {
      setCategoryMain(category)
    }

    const handleOpenModal = (product) => {
      setShouldOpenProductModal(true)
      setProductInModal(product)
    }

    const handleAddProduct = (product) => {
      setShouldOpenProductModal(false)
      setOpenCart(true)
      setProductsInCart([...productsInCart, product])
    }

    const handleRequest = () => {
      setOpenCart(!openCart);
      sendRequestData(productsInCart);
    };

    const renderProducts = (value, category) => {
      return (
        value.filter((product) => product.category === category).map(((product) => {
            return (
              <ProductCard 
                product={product} 
                productImage={product.imageUrl} 
                click={() => handleOpenModal(product)}
              />
            )   
          }
        ))
      )
    }

    const renderModal = (product) => {
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
                <AiOutlineCloseCircle size="24px" />
                <span onClick={() => setShouldOpenProductModal(false)}>
                  <AiOutlineCloseCircle size="24px" />
                </span>
                <div className='header'>
                  <div className='image-place'>
                    <img src={product.imageUrl} alt="product-pic" />
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
                    return (
                      <div class="sizes">
                        <div className='minus'>
                          <AiOutlineMinusCircle size="20px" />
                        </div>
                        <p>{portion.name}</p>
                        <p>Preço: {formatter.format(portion.price)}</p>
                        <div className='plus' onClick={() => handleAddToPreview(portion)}>
                          <AiOutlinePlusCircle size="24px" />
                        </div>
                        <p>
                          
                        </p>
                      </div>
                    )
                  })}
                  <button onClick={() => handleAddProduct(product)}>Adicionar ao Pedido</button>
                </div>
              </ModalBody>
            </ModalContainer>
          </Modal>
        )
      }
    }

    const renderCart = (cartproducts) => {
      return(
        <Modal flex={"flex"} state={openCart}>
          <CartContainer>
          <spam onClick={() => setOpenCart(false)}>x</spam>
           <CartList>
             {cartproducts.map((el) => (
               <CartItem product={el} />
             ))}
           </CartList>
           <ButtonRequest onClick={handleRequest}>Fazer Pedido</ButtonRequest>
         </CartContainer>
       </Modal>
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
        {shouldOpenProductModal && renderModal(productInModal)}
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
          {openCart && renderCart(productsInCart)}
        </Content>
      </Container>
    )
}
export default MenuPage
