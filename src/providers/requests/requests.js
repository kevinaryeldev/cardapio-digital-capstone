import api from "../../utils/api.js";
import { toast } from "react-toastify";
import { createContext, useContext, useState } from "react";

export const RequestsContext = createContext();

export const RequestsProvider = ({ children }) => {
  const [requests, setRequests] = useState([
    {
      table: 3,
      date: "13/05 - 12:23",
      totalPrice: 14.0,
      totalQuantity: 1,
      status: "rejected",
      requests: [
        {
          name: "Porção de batata frita média (2 pessoas)",
          aditionals: "Queijo Cheddar",
          image:
            "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
          quantity: 1,
        },
      ],
    },
    {
      table: 2,
      date: "13/05 - 12:23",
      totalPrice: 14.0,
      totalQuantity: 1,
      status: "accepted",
      requests: [
        {
          name: "Porção de batata frita média (2 pessoas)",
          aditionals: "Queijo Cheddar",
          image:
            "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
          quantity: 1,
        },
      ],
    },
    {
      table: 3,
      date: "13/05 - 12:23",
      totalPrice: 14.0,
      totalQuantity: 1,
      status: "accepted",
      requests: [
        {
          name: "Porção de batata frita média (2 pessoas)",
          aditionals: "Queijo Cheddar",
          image:
            "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
          quantity: 1,
        },
        {
          name: "Porção de batata frita média (2 pessoas)",
          aditionals: "Queijo Cheddar",
          image:
            "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
          quantity: 1,
        },
        {
          name: "Porção de batata frita média (2 pessoas)",
          aditionals: "Queijo Cheddar",
          image:
            "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
          quantity: 1,
        },
      ],
    },
    {
      table: 3,
      date: "13/05 - 12:23",
      totalPrice: 14.0,
      totalQuantity: 1,
      status: "accepted",
      requests: [
        {
          name: "Porção de batata frita média (2 pessoas)",
          aditionals: "Queijo Cheddar",
          image:
            "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
          quantity: 1,
        },
      ],
    },
    {
      table: 3,
      date: "13/05 - 12:23",
      totalPrice: 14.0,
      totalQuantity: 1,
      status: "waiting",
      requests: [
        {
          name: "Porção de batata frita média (2 pessoas)",
          aditionals: "Queijo Cheddar",
          image:
            "https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg",
          quantity: 1,
        },
      ],
    },
  ]);
  const getRequestData = async () => {
    const token = localStorage.getItem("@SmartMenu:token");
    const { data } = await api
      .get("/cart/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    setRequests(data);
    
    return data
  };

  const sendRequestData = async (cartProducts) => {
    const token = localStorage.getItem("@SmartMenu:token");
    const id = localStorage.getItem("@SmartMenu:id");
    const data = {
      group: {
        request: cartProducts,
        table: 1,
      },
      userId: id,
    };
    const response = await api
      .patch("/cart/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(toast.success("Pedido enviado!"))
      .catch((err) => toast.error(err));
  };

  return (
    <RequestsContext.Provider
      value={{ requests, setRequests, getRequestData, sendRequestData }}
    >
      {children}
    </RequestsContext.Provider>
  );
};

export const useRequests = () => useContext(RequestsContext);
