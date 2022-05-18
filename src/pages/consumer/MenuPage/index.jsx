import Modal from "../../../components/Modal";
import { useState } from "react";
import { ButtonRequest, CartContainer, CartList, MenuContainer } from "./style";
import CartItem from "../../../components/CartItem";
import { useContext } from "react";
import { RequestsContext } from "../../../providers/requests/requests";

const MenuPage = () => {
  const { requests, getRequestData, sendRequestData } =
    useContext(RequestsContext);
  const [openCart, setOpenCart] = useState(false);
  const products = [
    {
      name: "product 12",
      price: 1,
      rating: 4,
      imageUrl: "https://picsum.photos/200",
      userId: 2,
      id: 3,
      time: 5,
    },
  ];

  const handleRequest = () => {
    const time = new Date().toLocaleTimeString().substring(0, 5);
    const date = new Date().toLocaleDateString().substring(0, 5);
    const newRequest = {
      date: `${date} - ${time}`,
      totalPrice: products.reduce(function (acc, curValue) {
        return acc + parseFloat(curValue.price);
      }, 0),
      totalQuantity: 1,
      status: "waiting",
      requests: products,
    };
    setOpenCart(!openCart);
    sendRequestData(newRequest);
  };
  return (
    <MenuContainer>
      MenuPage
      <button onClick={() => setOpenCart(!openCart)}> clickae</button>
      <Modal flex={"flex"} state={openCart}>
        <CartContainer>
          <CartList>
            {products.map((el) => (
              <CartItem product={el} />
            ))}
          </CartList>
          <ButtonRequest onClick={handleRequest}>Fazer Pedido</ButtonRequest>
        </CartContainer>
      </Modal>
    </MenuContainer>
  );
};
export default MenuPage;
