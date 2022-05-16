import Menu from "./../../../../components/Menu";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import { useRef } from "react";
import {
  Dashboard,
  DashboardNav,
  DashboardHeader,
  DashboardContainer,
  DashboardProductsContainer,
  DashboardNavContainer,
} from "./style";
import ProductCard from "../../../../components/ProductCard";

const DashboardPage = (products) => {
  const inputSearch = useRef();

  const Search = () => {
    console.log(inputSearch.current.value);
  };

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
          <button>Adicionar</button>
        </DashboardHeader>
        <DashboardProductsContainer>
          {products.lenght > 0 &&
            products.map((el) => <ProductCard product={el} />)}
        </DashboardProductsContainer>
      </Dashboard>
    </DashboardContainer>
  );
};
export default DashboardPage;
