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

const DashboardPage = (products) => {
  const inputSearch = useRef();

  const Search = () => {
    console.log(inputSearch.current.value);
  };

  const [openRegisterProduct, setOpenRegisterProduct] = useState(false);

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
            {products.lenght > 0 &&
              products.map((el) => <ProductCard product={el} />)}
          </DashboardProductsContainer>
        </Dashboard>
        {openRegisterProduct && (
          <RegisterProduct
            openRegisterProduct={openRegisterProduct}
            setOpenRegisterProduct={setOpenRegisterProduct}
          />
        )}
      </DashboardContainer>
    </>
  );
};
export default DashboardPage;
