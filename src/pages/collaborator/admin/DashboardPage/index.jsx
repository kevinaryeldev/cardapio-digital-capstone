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
} from "./style";
import ProductCard from "../../../../components/ProductCard";
import RegisterProduct from "../../../../components/RegisterProduct";
import { useMenu } from "../../../../providers/menu/menu";
import { useAuth } from "../../../../providers/user/user";
import { useHistory } from "react-router-dom";

const DashboardPage = () => {
  const inputSearch = useRef();

  const Search = () => {
    console.log(inputSearch.current.value);
  };

  const { token } = useAuth();
  let history = useHistory();

  if (!token) {
    history.push("/login");
  }

  const { products } = useMenu();

  const [openRegisterProduct, setOpenRegisterProduct] = useState(false);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [productToBeEdited, setProductToBeEdited] = useState({});

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
                  setProductToBeEdited={setProductToBeEdited}
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
            productToBeEdited={productToBeEdited}
          />
        )}
      </DashboardContainer>
    </>
  );
};
export default DashboardPage;
