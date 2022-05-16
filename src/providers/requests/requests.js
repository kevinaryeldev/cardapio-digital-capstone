import {createContext, useContext, useState} from 'react'

const RequestsContext = createContext()

export const RequestsProvider = ({children}) => {
    const [requests, setRequests ] = useState([{
        table: 3,
        date: "13/05 - 12:23",
        totalPrice: 14.00,
        totalQuantity: 1,
        status: "rejected",
        requests : [{
            name: "Porção de batata frita média (2 pessoas)",
            aditionals: "Queijo Cheddar",
            image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
            quantity: 1,
        }]
    },
    {
        table: 2,
        date: "13/05 - 12:23",
        totalPrice: 14.00,
        totalQuantity: 1,
        status: "accepted",
        requests : [{
            name: "Porção de batata frita média (2 pessoas)",
            aditionals: "Queijo Cheddar",
            image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
            quantity: 1,
        }]
    },
   {
        table: 3,
        date: "13/05 - 12:23",
        totalPrice: 14.00,
        totalQuantity: 1,
        status: "accepted",
        requests : [{
            name: "Porção de batata frita média (2 pessoas)",
            aditionals: "Queijo Cheddar",
            image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
            quantity: 1,
        },{
            name: "Porção de batata frita média (2 pessoas)",
            aditionals: "Queijo Cheddar",
            image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
            quantity: 1,
        },{
            name: "Porção de batata frita média (2 pessoas)",
            aditionals: "Queijo Cheddar",
            image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
            quantity: 1,
        }]
    }, {
        table: 3,
        date: "13/05 - 12:23",
        totalPrice: 14.00,
        totalQuantity: 1,
        status: "accepted",
        requests : [{
            name: "Porção de batata frita média (2 pessoas)",
            aditionals: "Queijo Cheddar",
            image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
            quantity: 1,
        }]
    }, {
        table: 3,
        date: "13/05 - 12:23",
        totalPrice: 14.00,
        totalQuantity: 1,
        status: "waiting",
        requests : [{
            name: "Porção de batata frita média (2 pessoas)",
            aditionals: "Queijo Cheddar",
            image: "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
            quantity: 1,
        }]
    }
])
    return (
        <RequestsContext.Provider value={{requests, setRequests }}>
          {children}
        </RequestsContext.Provider>
      );
}

export const useRequests = () => useContext(RequestsContext)