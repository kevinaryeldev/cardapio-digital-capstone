import instance from "./../../services";
import { addRequestApi, deleteRequestApi, editRequestApi } from "./../../services/requests";
import { createContext, useContext, useState, useEffect } from "react";

export const RequestsContext = createContext();

export const RequestsProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(requests);
  }, [requests]);

  const getRequestData = async () => {
    const token = localStorage.getItem("@SmartMenu:token");
    const id = localStorage.getItem("@SmartMenu:id");
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

    return data;
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

  const sendEditRequestData = async (demmand, demmandId) => {
    const response = await editRequestApi(demmand, demmandId);
    if (response) {
      await getRequestData();
      return true;
    } else {
      return false;
    }
  };

  const sendDeleteRequestData = async (demmand, demmandId) => {
    const response = await deleteRequestApi(demmand, demmandId);
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
      value={{
        requests,
        setRequests,
        getRequestData,
        sendRequestData,
        sendEditRequestData,
        sendDeleteRequestData
      }}
    >
      {children}
    </RequestsContext.Provider>
  );
};

export const useRequests = () => useContext(RequestsContext);
