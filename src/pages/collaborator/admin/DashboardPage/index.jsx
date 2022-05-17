import Menu from "./../../../../components/Menu";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import { useState } from "react";
import {
  Dashboard,
  DashboardNav,
  DashboardHeader,
  DashboardContainer,
  DashboardProductsContainer,
  DashboardNavContainer,
} from "./style";
import ProductCard from "../../../../components/ProductCard";
import { useProducts } from "../../../../providers/products/products";

const DashboardPage = () => {
  const { products } = useProducts();

  const [showProducts, setShowProducts] = useState(products);

  const filter = (valueFilter) => {
    const formatedValue = valueFilter.trim().toUpperCase()
    const filtered = products.filter((i)=> (i.name).toUpperCase().includes(formatedValue));
    formatedValue === "" ? setShowProducts(products) : setShowProducts(filtered);
  };

  const [openRegisterProduct, setOpenRegisterProduct] = useState(false);

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
          <button>Adicionar</button>
        </DashboardHeader>
        <DashboardProductsContainer>
          {showProducts.length > 0 ? showProducts.map((item) => <ProductCard key={item.id} product={item} />) : <aside>Nenhuma produto encontrado</aside>}
        </DashboardProductsContainer>
      </Dashboard>
    </DashboardContainer>
  );
};
export default DashboardPage;
