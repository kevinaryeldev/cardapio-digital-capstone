import { CartProvider } from "./cart/cart";
import { FeedbacksProvider } from "./feedbacks/feedbacks";
import { MenuProvider } from "./menu/menu";
import { UserProvider } from "./user/user";

const Providers = ({ children }) => {
  return (
    <FeedbacksProvider>
      <UserProvider>
        <MenuProvider>
          <CartProvider>{children}</CartProvider>
        </MenuProvider>
      </UserProvider>
    </FeedbacksProvider>
  );
};
export default Providers;
