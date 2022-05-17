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
} from "./style";
  
const DashboardPage = () => {
    const { products } = useProducts();

    const [openEditProduct, setOpenEditProduct] = useState(false);
    const [openRegisterProduct, setOpenRegisterProduct] = useState(false);
    const [productToBeEdited, setProductToBeEdited] = useState({});
    const [showProducts, setShowProducts] = useState(products);

  const filter = (valueFilter) => {
    const formatedValue = valueFilter.trim().toUpperCase()
    const filtered = products.filter((i)=> (i.name).toUpperCase().includes(formatedValue));
    formatedValue === "" ? setShowProducts(products) : setShowProducts(filtered);
  };

  const { token } = useAuth();
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
            showProducts.map((el) => (
              <ProductCard
                setOpenEditProduct={setOpenEditProduct}
                setProductToBeEdited={setProductToBeEdited}
                key={"product" + el.id}
                product={el}
              />
          ))}
        </DashboardProductsContainer>
      </Dashboard>
      {!!openRegisterProduct && (
        <RegisterProduct
          type="register"
          openModal={openRegisterProduct}
          setOpenModal={setOpenRegisterProduct}
        />
      )}
      {!!openEditProduct && (
        <RegisterProduct
          type="edit"
          openModal={openEditProduct}
          setOpenModal={setOpenEditProduct}
          productToBeEdited={productToBeEdited}
        />
      )}
    </DashboardContainer>
  );
};
export default DashboardPage;
