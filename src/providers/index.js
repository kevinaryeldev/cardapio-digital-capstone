import { CartProvider } from "./cart/cart";
import { MenuProvider } from "./menu/menu";
import { UserProvider } from "./user/user";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <MenuProvider>
        <CartProvider>{children}</CartProvider>
      </MenuProvider>
    </UserProvider>
  );
};
export default Providers;
