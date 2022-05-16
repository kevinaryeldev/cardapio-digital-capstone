import { useContext, useState } from 'react'
import {createContext} from 'react'

export const MenuContext = createContext([])

export const MenuProvider = ({children}) => {

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
    
    return(
        <MenuContext.Provider value={{isPaymentModalOpen, setIsPaymentModalOpen}}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenu = () => useContext(MenuContext);