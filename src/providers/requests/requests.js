import instance from "./../../services";
import { addRequestApi } from "./../../services/requests";
import { createContext, useContext, useState, useEffect } from "react";

export const RequestsContext = createContext();

export const RequestsProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);

  const getRequestData = async () => {
    const token = localStorage.getItem("@SmartMenu:token");
    const { data } = await instance
      .get("/cart/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    setRequests(data);
  };

  const sendRequestData = async (cartProducts) => {
    const response = await addRequestApi(cartProducts);
    if (response) {
      getRequestData();
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getRequestData();
  }, []);

  return (
    <RequestsContext.Provider
      value={{ requests, setRequests, getRequestData, sendRequestData }}
    >
      {children}
    </RequestsContext.Provider>
  );
};

export const useRequests = () => useContext(RequestsContext);
