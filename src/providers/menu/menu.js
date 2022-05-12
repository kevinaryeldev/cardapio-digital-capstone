import {createContext} from 'react'

export const MenuContext = createContext([])

export const MenuProvider = ({children}) => {
    return(
        <MenuContext.Provider>
            {children}
        </MenuContext.Provider>
    )
}