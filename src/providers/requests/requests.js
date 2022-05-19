import instance from "./../../services";
import { addRequestApi } from "./../../services/requests";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../user/user";

export const RequestsContext = createContext();

export const RequestsProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const { id } = useAuth()

  const getRequestData = async () => {
    const token = localStorage.getItem("@SmartMenu:token");
    const { data } = await instance
      .get(`/cart?userId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    setRequests(data);
  };

  const sendRequestData = async (demmand) => {
    const response = await addRequestApi(demmand);
    if (response) {
      await getRequestData();
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
