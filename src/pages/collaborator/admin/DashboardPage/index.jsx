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
import RegisterProduct from "../../../../components/RegisterProduct";
import { useMenu } from "../../../../providers/menu/menu";
import { useAuth } from "../../../../providers/user/user";
import { useHistory } from "react-router-dom";
import { useProducts } from "../../../../providers/products/products";
  
const DashboardPage = () => {
    const { products } = useProducts();
    const { productsMenu } = useMenu();
    // const inputSearch = useRef();

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

  const [openRegisterProduct, setOpenRegisterProduct] = useState(false);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [productToBeEdited, setProductToBeEdited] = useState({});

  return (
    <DashboardContainer>
      <Menu />
      <Dashboard>
        {/* <DashboardNavContainer>
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
          </DashboardNav>
        </DashboardNavContainer>
        <DashboardHeader>
          <h2>ENTRADAS</h2>
          <button>Adicionar</button>
        </DashboardHeader>
        <DashboardProductsContainer>
          {showProducts.length > 0 ? showProducts.map((item) => <ProductCard key={item.id} product={item} />) : <aside>Nenhuma produto encontrado</aside>}
        </DashboardProductsContainer> */}
      </Dashboard>
    </DashboardContainer>
  );
};
export default DashboardPage;
