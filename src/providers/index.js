import { CartProvider } from "./cart/cart";
import { MenuProvider } from "./menu/menu";

const Providers = ({children}) => {
    return(
        <MenuProvider>
            <CartProvider>{children}</CartProvider>
        </MenuProvider>
    )
}
export default Providers