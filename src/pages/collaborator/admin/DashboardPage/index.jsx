import Menu from "./../../../../components/Menu";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";
import {
  Dashboard,
  DashboardNav,
  DashboardHeader,
  DashboardContainer,
  DashboardProductsContainer,
  DashboardNavContainer,
  ConfirmsContainer,
} from "./style";
import ProductCard from "../../../../components/ProductCard";
import RegisterProduct from "../../../../components/RegisterProduct";
import { useMenu } from "../../../../providers/menu/menu";
import { useAuth } from "../../../../providers/user/user";
import { useHistory } from "react-router-dom";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";

const DashboardPage = () => {
  const inputSearch = useRef();

  const Search = () => {
    console.log(inputSearch.current.value);
  };

  const { token } = useAuth();
  const { removeProduct } = useMenu();

  let history = useHistory();

  if (!token) {
    history.push("/login");
  }

  const { products } = useMenu();

  const [openRegisterProduct, setOpenRegisterProduct] = useState(false);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [productToChange, setProductToChange] = useState({});
  const [openRemoveProduct, setOpenRemoveProduct] = useState(false);

  return (
    <>
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
                  ref={inputSearch}
                  placeholder="Digite sua pesquisa aqui..."
                  onChange={Search}
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
            {products.length > 0 &&
              products.map((el) => (
                <ProductCard
                  setOpenEditProduct={setOpenEditProduct}
                  setProductToChange={setProductToChange}
                  setOpenRemoveProduct={setOpenRemoveProduct}
                  key={"product" + el.id}
                  product={el}
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
            productToBeEdited={productToChange}
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
                  const response = removeProduct(productToChange);
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
    </>
  );
};
export default DashboardPage;
