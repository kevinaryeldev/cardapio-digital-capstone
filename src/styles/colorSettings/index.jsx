import { useAuth } from "../../providers/user/user";
import { ColorsTheme } from "./global";

const ColorSettings = ({ children }) => {

    const { colorTheme } = useAuth();

    const { primaryColor, primaryColor50, secondaryColor, secondaryColor50, terciaryColor, terciaryColor50 } = colorTheme

    return (
        <ColorsTheme primaryColor={primaryColor} primaryColor50={primaryColor50} secondaryColor={secondaryColor} secondaryColor50={secondaryColor50} terciaryColor={terciaryColor} terciaryColor50={terciaryColor50}>
            {children}
        </ColorsTheme>
    )
}

export default ColorSettings