import { useState, useEffect } from "react";
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
  let history = useHistory();
  const { token, categories} = useAuth();
  const { products, removeProduct } = useProducts();
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [openRegisterProduct, setOpenRegisterProduct] = useState(false);
  const [openRemoveProduct, setOpenRemoveProduct] = useState(false);
  const [productToBeEdited, setProductToBeEdited] = useState({});
  const [showProducts, setShowProducts] = useState();

  const productsInCategory = products.filter(
    (el) => el.category === categories[currentCategoryIndex]
  );

  const filter = (valueFilter) => {
    const formatedValue = valueFilter.trim().toUpperCase();
    const filtered = productsInCategory.filter((i) =>
      i.name.toUpperCase().includes(formatedValue)
    );
    formatedValue === ""
      ? setShowProducts(productsInCategory)
      : setShowProducts(filtered);
  };

  useEffect(() => {
    setShowProducts(productsInCategory);
  }, [products, currentCategoryIndex]);

  if (!token) {
    history.push("/login");
  }
  const ChangeCategory = (num) => {
    num > 0
      ? currentCategoryIndex < categories.length - 1
        ? setCurrentCategoryIndex(currentCategoryIndex + 1)
        : setCurrentCategoryIndex(0)
      : currentCategoryIndex === 0
      ? setCurrentCategoryIndex(categories.length - 1)
      : setCurrentCategoryIndex(currentCategoryIndex - 1);
  };

  return (
    <DashboardContainer>
      <div>
        <Menu />
      </div>
      <Dashboard>
        <DashboardNavContainer>
          <DashboardNav>
            <button>
              <FaAngleLeft
                size="30px"
                color="white"
                onClick={() => ChangeCategory(-1)}
              />
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
              <FaAngleRight
                size="30px"
                color="white"
                onClick={() => ChangeCategory(1)}
              />
            </button>
          </DashboardNav>
        </DashboardNavContainer>
        <DashboardHeader>
          <h2>{categories[currentCategoryIndex].toUpperCase()}</h2>
          <button onClick={() => setOpenRegisterProduct(true)}>
            Adicionar
          </button>
        </DashboardHeader>
        <DashboardProductsContainer>
          {!!showProducts &&
            showProducts.map((product) => (
              <ProductCard
                productImage={product.imageUrl}
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
