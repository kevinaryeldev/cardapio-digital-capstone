import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import Menu from "./../../../../components/Menu";
import ProductCard from "../../../../components/ProductCard";
import RegisterProduct from "../../../../components/RegisterProduct";
import { useAuth } from "../../../../providers/user/user";
import { useProducts } from "../../../../providers/products/products";
import {
  Dashboard,
  DashboardNav,
  DashboardHeader,
  DashboardContainer,
  DashboardProductsContainer,
  DashboardNavContainer,
  ConfirmsContainer,
} from "./style";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";

  
const DashboardPage = () => {
    const { token } = useAuth();
    const { products, removeProduct } = useProducts();

    const [openEditProduct, setOpenEditProduct] = useState(false);
    const [openRegisterProduct, setOpenRegisterProduct] = useState(false);
    const [openRemoveProduct, setOpenRemoveProduct] = useState(false);
    const [productToBeEdited, setProductToBeEdited] = useState({});
    const [showProducts, setShowProducts] = useState(products);

  const filter = (valueFilter) => {
    const formatedValue = valueFilter.trim().toUpperCase()
    const filtered = products.filter((i)=> (i.name).toUpperCase().includes(formatedValue));
    formatedValue === "" ? setShowProducts(products) : setShowProducts(filtered);
  };


  let history = useHistory();

  if (!token) {
    history.push("/login");
  }

  return (
    <DashboardContainer>
      <Menu />
      <Dashboard>
        <DashboardNavContainer>
        <DashboardNav>
          <button>
            <FaAngleLeft size="30px" color="white" />
          </button>
          <form action="">
            <FaSearch size="30px" />
            <input
              type="text"
              placeholder="Digite sua pesquisa aqui..."
              onChange={(e) => filter(e.target.value)}
            />
          </form>
          <button>
            <FaAngleRight size="30px" color="white" />
          </button>
        </DashboardNav>
        </DashboardNavContainer>
        <DashboardHeader>
          <h2>ENTRADAS</h2>
          <button onClick={() => setOpenRegisterProduct(true)}>
            Adicionar
          </button>
        </DashboardHeader>
        <DashboardProductsContainer>
          {!!showProducts &&
            showProducts.map((product) => (
              <ProductCard
                setOpenEditProduct={setOpenEditProduct}
                setProductToBeEdited={setProductToBeEdited}
                setOpenRemoveProduct={setOpenRemoveProduct}
                key={"product" + product.id}
                product={product}
              />
          ))}
        </DashboardProductsContainer>
      </Dashboard>
      {openRegisterProduct && (
        <RegisterProduct
          type="register"
          openModal={openRegisterProduct}
          setOpenModal={setOpenRegisterProduct}
        />
      )}
      {openEditProduct && (
        <RegisterProduct
          type="edit"
          openModal={openEditProduct}
          setOpenModal={setOpenEditProduct}
          productToBeEdited={productToBeEdited}
        />
      )}
      {openRemoveProduct && (
        <Modal
          setOpenModal={setOpenRemoveProduct}
          state={openRemoveProduct}
          flex
          align="center"
          justify="center"
          padding="15px"
        >
          <ConfirmsContainer>
            <h2>Deseja remover este produto?</h2>
            <Button
              width="49%"
              bgBlack
              onClick={() => {
                const response = removeProduct(productToBeEdited);
                if (response) {
                  setOpenRemoveProduct(false);
                }
              }}
            >
              Sim
            </Button>
            <Button
              width="49%"
              bgBlack
              onClick={() => setOpenRemoveProduct(false)}
            >
              Não
            </Button>
          </ConfirmsContainer>
        </Modal>
      )}
    </DashboardContainer>
  );
};
export default DashboardPage;
