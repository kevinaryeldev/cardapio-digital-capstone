import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getUserData,
  loginUser,
  patchUserData,
  signUpUser,
} from "../../services/users/users";
import { defaultTheme } from "../../styles/colorSettings/global";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    window.localStorage.getItem("@SmartMenu:token") || null
  );

  const [id, setId] = useState(
    window.localStorage.getItem("@SmartMenu:id") || null
  );

  const [userInfos, setUserInfos] = useState({});
  const [colorTheme, setColorTheme] = useState(defaultTheme);
  const [colorChange, setColorChange] = useState(false);
  const [categories, setCategories] = useState([
    "Entradas",
    "Pratos Principais",
    "Bebidas",
    "Sobremesas",
  ]);
  const [table, setTable] = useState(1);
  const [currentTable, setCurrentTable] = useState(1);

  useEffect(() => {
    if (token && id) {
      getUserData(id, token, setUserInfos);
    }
  }, []);

  useEffect(() => {
    if (userInfos.categories) {
      setCategories(userInfos.categories);
    }

    if (userInfos.theme) {
      setColorTheme(userInfos.theme);
    }
    if (userInfos.tableQuantity) {
      setTable(userInfos.tableQuantity);
    }
  }, [userInfos]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("@SmartMenu:token", token);
      window.localStorage.setItem("@SmartMenu:id", id);
      getUserData(id, token, setUserInfos);
    }
  }, [token]);

  const login = async (data) => {
    const response = await loginUser(data);
    const accessToken = window.localStorage.getItem("@SmartMenu:token");
    const userId = window.localStorage.getItem("@SmartMenu:id");

    if (response) {
      setId(userId);
      setTimeout(setToken, 501, accessToken);
      const responseUserInfos = await getUserData(
        userId,
        accessToken,
        setUserInfos
      );
    }
  };

  const logout = () => {
    window.localStorage.removeItem("@SmartMenu:token");
    window.localStorage.removeItem("@SmartMenu:id");
    window.localStorage.removeItem("@SmartMenu:theme");
    toast.success("Logout realizado com sucesso!");
    setToken(null);
    setId(null);
    setUserInfos({});
    setColorTheme(defaultTheme);
  };

  const signUp = async (data) => {
    const response = await signUpUser(data);
    const accessToken = window.localStorage.getItem("@SmartMenu:token");
    const userId = window.localStorage.getItem("@SmartMenu:id");

    if (response) {
      setId(userId);
      setTimeout(setToken, 501, accessToken);
      const responseUserInfos = await getUserData(
        userId,
        accessToken,
        setUserInfos
      );
    }
  };

  const changeUserInfos = async (
    newData,
    toastSucessMessage,
    toastErrorMessage
  ) => {
    const updateUserInfos = await patchUserData(
      newData,
      id,
      token,
      toastSucessMessage,
      toastErrorMessage,
      setUserInfos
    );
    if (updateUserInfos) {
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider
      value={{
        token,
        id,
        login,
        logout,
        signUp,
        userInfos,
        categories,
        setCategories,
        table,
        setTable,
        currentTable,
        setCurrentTable,
        colorTheme,
        setColorTheme,
        colorChange,
        setColorChange,
        changeUserInfos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
