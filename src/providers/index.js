import { CartProvider } from "./cart/cart";
import { MenuProvider } from "./menu/menu";
import { UserProvider } from "./user/user";
import { RequestsProvider } from "./requests/requests";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <MenuProvider>
        <CartProvider>
          <RequestsProvider>{children}</RequestsProvider>
        </CartProvider>
      </MenuProvider>
    </UserProvider>
  );
};
export default Providers;
