import { CartProvider } from "./cart/cart";
import { MenuProvider } from "./menu/menu";
import { UserProvider } from "./user/user";
import { RequestsProvider } from "./requests/requests";
import { ProductsProvider } from "./products/products";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <MenuProvider>
        <CartProvider>
          <RequestsProvider>
            <ProductsProvider>
              {children}
            </ProductsProvider>
          </RequestsProvider>
        </CartProvider>
      </MenuProvider>
    </UserProvider>
  );
};
export default Providers;
