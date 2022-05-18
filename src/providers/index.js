import { CartProvider } from "./cart/cart";
import { FeedbacksProvider } from "./feedbacks/feedbacks";
import { MenuProvider } from "./menu/menu";
import { UserProvider } from "./user/user";
import { RequestsProvider } from "./requests/requests";
import { ProductsProvider } from "./products/products";

const Providers = ({ children }) => {
  return (
    <FeedbacksProvider>
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
    </FeedbacksProvider>
  );
};
export default Providers;
