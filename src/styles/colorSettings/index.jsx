import { useState } from "react";
import { useAuth } from "../../providers/user/user";
import { ColorsTheme, defaultTheme } from "./global";

const ColorSettings = ({ children }) => {

    const { colorTheme, colorChange } = useAuth();

    const colorsSelect = () => {
        if(window.localStorage.getItem("@SmartMenu:theme")){
            if(colorChange === true) {
                return colorTheme;
            }else{
                return JSON.parse(window.localStorage.getItem("@SmartMenu:theme"))
            }
        }else {
            return defaultTheme
        }
    }


    const { primaryColor, primaryColor50, secondaryColor, secondaryColor50, terciaryColor, terciaryColor50 } = colorsSelect()
    console.log(colorsSelect())

    return (
        <ColorsTheme primaryColor={primaryColor} primaryColor50={primaryColor50} secondaryColor={secondaryColor} secondaryColor50={secondaryColor50} terciaryColor={terciaryColor} terciaryColor50={terciaryColor50}>
            {children}
        </ColorsTheme>
    )
}

export default ColorSettings