import Modal from "../../../components/Modal";
import { useState } from "react";
import { ButtonRequest, CartContainer, CartList, MenuContainer } from "./style";
import CartItem from "../../../components/CartItem";

const MenuPage = () => {
  const [openCart, setOpenCart] = useState(false);
  const products = [
    {
      name: "product 1",
      price: 0,
      rating: 4,
      imageUrl: "https://picsum.photos/200",
      userId: 1,
      id: 1,
    },
    {
      name: "product 2",
      price: 1,
      rating: 5,
      imageUrl: "https://picsum.photos/200",
      userId: 1,
      id: 2,
    },
    {
      name: "product 12",
      price: 1,
      rating: 4,
      imageUrl: "https://picsum.photos/200",
      userId: 2,
      id: 3,
    },
  ];
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
          <ButtonRequest onClick={() => setOpenCart(!openCart)}>
            Fazer Pedido
          </ButtonRequest>
        </CartContainer>
      </Modal>
    </MenuContainer>
  );
};
export default MenuPage;
