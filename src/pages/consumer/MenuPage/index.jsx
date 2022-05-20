import { useEffect, useState } from "react";
import { useRequests } from "../../../providers/requests/requests";
import { getProducts } from "../../../services/consumer/consumer";
import { useAuth } from "../../../providers/user/user";
import formatter from "../../../utils/formatter";

import {
  AiOutlineCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { FaConciergeBell } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import {
  Container,
  Content,
  ModalContainer,
  ModalBody,
  ModalHeader,
  ButtonsContainer,
  RoundButton,
} from "./style";
import { ButtonRequest, CartContainer, CartList } from "./style";
import CartItem from "../../../components/CartItem";
import Modal from "../../../components/Modal";
import ProductCard from "../../../components/ProductCard";
import { toast } from "react-toastify";
import { useProducts } from "../../../providers/products/products";
import { useMenu } from "../../../providers/menu/menu.js";
import { useHistory } from "react-router-dom";

const MenuPage = () => {
  const history = useHistory();
  const { id, currentTable } = useAuth();
  const { categories } = useMenu();
  const { products } = useProducts();
  const { sendRequestData } = useRequests();

  const [productInModal, setProductInModal] = useState();
  const [portionsPicked, setPortionsPicked] = useState([]);
  const [extrasPicked, setExtrasPicked] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [categoryMain, setCategoryMain] = useState(categories[0]);
  const [openCart, setOpenCart] = useState(false);
  const [shouldRenderError, setShouldRenderError] = useState(false);
  const [shouldOpenProductModal, setShouldOpenProductModal] = useState(false);

  const handleMainCategory = (category) => {
    setCategoryMain(category);
  };

  const handleOpenModal = (product) => {
    setShouldOpenProductModal(true);
    setProductInModal(product);
  };

  const handleAddProductToCart = ({
    name,
    imageUrl,
    waitingTime,
    userId,
    id,
  }) => {
    const request = {
      name: name,
      imageUrl: imageUrl,
      userId: userId,
      id: id,
      waitingTime: waitingTime,
      portions: portionsPicked,
      portionsPrice: portionsPicked.reduce((a, b) => a + Number(b.price), 0),
    };
    if (extrasPicked.length > 0) {
      request.extras = extrasPicked;
      request.extrasPrice = extrasPicked.reduce(
        (a, b) => a + Number(b.price),
        0
      );
    }

    if (portionsPicked.length > 0) {
      setShouldOpenProductModal(false);
      setProductsInCart([...productsInCart, request]);
      toast.success("Produto adicionado com sucesso");
    } else {
      toast.error("Porções insuficientes");
      setShouldRenderError(true);
    }
  };

  const handleRequest = () => {
    setOpenCart(!openCart);

    const demmandPart = {
      table: currentTable, //Alterar para o state table que estará no contexto global em algum provider
      date: new Date(),
      status: "opened",
      requests: [...productsInCart],
      userId: id,
    };

    const totalPrice = demmandPart.requests
      .map((request) => {
        if (request.extrasPrice) {
          return request.portionsPrice + request.extrasPrice;
        }
        return request.portionsPrice;
      })
      .reduce((acc, currentValue) => acc + currentValue);

    const totalQuantity = demmandPart.requests
      .map((request) => {
        if (request.extras) {
          return (
            parseFloat(request.portions.length) +
            parseFloat(request.extras?.length || 0)
          );
        }
        return parseFloat(request.portions.length);
      })
      .reduce((acc, currentValue) => acc + currentValue);

    const demmand = {
      ...demmandPart,
      price: totalPrice,
      quantity: totalQuantity,
    };

    sendRequestData(demmand);
    setProductsInCart([]);
  };

  const handleAddExtras = (extra) => {
    const newExtraArr = [...extrasPicked, extra];
    setExtrasPicked(newExtraArr);
  };

  const handleAddPortion = (portion) => {
    const newPortionsArr = [...portionsPicked, portion];
    setPortionsPicked(newPortionsArr);
  };

  const handleRemoveExtras = (portion) => {
    let extraPickedArr = extrasPicked.filter(
      (size) => size.name === portion.name
    );
    let otherextrasPickedArr = extrasPicked.filter(
      (size) => size.name !== portion.name
    );
    extraPickedArr.pop();
    const newPickedArr = otherextrasPickedArr.concat(extraPickedArr);
    setExtrasPicked(newPickedArr);
  };

  const handleRemovePortion = (portion) => {
    let sizePickedArr = portionsPicked.filter(
      (size) => size.name === portion.name
    );
    let otherSizesPickedArr = portionsPicked.filter(
      (size) => size.name !== portion.name
    );
    sizePickedArr.pop();
    const newPickedArr = otherSizesPickedArr.concat(sizePickedArr);
    setPortionsPicked(newPickedArr);
  };

  const renderProducts = (value, category) => {
    return value
      .filter((product) => product.category === category)
      .map((product, index) => {
        return (
          <ProductCard
            key={index}
            product={product}
            productImage={product.imageUrl}
            click={() => handleOpenModal(product)}
          />
        );
      });
  };

  const renderModal = (product) => {
    const extras = product.extras;
    const portions = product.portions;

    if (shouldOpenProductModal) {
      return (
        <Modal
          flex
          width={"48rem"}
          height={"38rem"}
          state={shouldOpenProductModal}
          // align="center"
          // justify="center"
          padding="15px"
        >
          <ModalContainer>
            <ModalHeader>
              <span onClick={() => setShouldOpenProductModal(false)}>
                <AiOutlineCloseCircle size="24px" />
              </span>
              <div className="header">
                <div className="image-place">
                  <img src={product.imageUrl} alt="product-pic" />
                </div>
                <div className="product-description">
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <p>Tempo estimado de espera: {product.waitingTime} minutos</p>
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="product-adds">
                <h2>Adicionais</h2>
                {!!extras &&
                  extras.map((extra, index) => {
                    const addsPickeds = extrasPicked.filter(
                      (add) => add.name === extra.name
                    );
                    return (
                      <div key={index} className="adds">
                        <div
                          className="minus"
                          onClick={() => handleRemoveExtras(extra)}
                        >
                          <AiOutlineMinusCircle size="20px" />
                        </div>
                        <p>{extra.name}</p>
                        <p>Preço: {formatter.format(extra.price)}</p>
                        <div
                          className="plus"
                          onClick={() => handleAddExtras(extra)}
                        >
                          <AiOutlinePlusCircle size="24px" />
                        </div>
                        <p>{addsPickeds.length}</p>
                      </div>
                    );
                  })}
              </div>
              <div className="product-size">
                <h2>Porções</h2>
                {!!portions &&
                  portions.map((portion, index) => {
                    const sizePickeds = portionsPicked.filter(
                      (size) => size.name === portion.name
                    );
                    return (
                      <div key={index} className="sizes">
                        <div
                          className="minus"
                          onClick={() => handleRemovePortion(portion)}
                        >
                          <AiOutlineMinusCircle size="20px" />
                        </div>
                        <p>{portion.name}</p>
                        <p>Preço: {formatter.format(portion.price)}</p>
                        <div
                          className="plus"
                          onClick={() => handleAddPortion(portion)}
                        >
                          <AiOutlinePlusCircle size="24px" />
                        </div>
                        <p>{sizePickeds.length}</p>
                      </div>
                    );
                  })}
              </div>
            </ModalBody>
            {shouldRenderError && (
              <p>É preciso ter ao menos uma porção do produto</p>
            )}
            <button onClick={() => handleAddProductToCart(product)}>
              Adicionar ao Pedido
            </button>
          </ModalContainer>
        </Modal>
      );
    }
  };

  const renderCart = (cartproducts) => {
    return (
      <Modal flex={"flex"} state={openCart}>
        <CartContainer>
          <span onClick={() => setOpenCart(false)}>
            <AiOutlineCloseCircle size="24px" />
          </span>
          <CartList>
            {cartproducts.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </CartList>
          <ButtonRequest onClick={handleRequest}>Fazer Pedido</ButtonRequest>
        </CartContainer>
      </Modal>
    );
  };

  useEffect(() => {
    setShouldRenderError(false);
    if (portionsPicked.length == 0 && openCart) {
      setShouldRenderError(true);
    }
    return;
  }, [portionsPicked, setPortionsPicked, openCart, setOpenCart]);

  return (
    <Container>
      {shouldOpenProductModal && renderModal(productInModal)}
      <nav className="desktop--nav">
        {categories.map((el) => {
          return (
            <div>
              <div onClick={() => handleMainCategory(el)}>{el}</div>
            </div>
          );
        })}
      </nav>
      <div className="foodsection">{categoryMain}</div>
      <Content>
        {!!products && renderProducts(products, categoryMain)}
        {openCart && renderCart(productsInCart)}
      </Content>
      <ButtonsContainer>
        <RoundButton onClick={() => history.push("/cart")}>
          <IoMdCash />
        </RoundButton>
        <RoundButton onClick={() => setOpenCart(true)}>
          <FaConciergeBell />
        </RoundButton>
      </ButtonsContainer>
    </Container>
  );
};
export default MenuPage;
