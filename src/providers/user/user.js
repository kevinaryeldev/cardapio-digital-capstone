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
  const [colorTheme, setColorTheme] = useState();
  const [colorChange, setColorChange] = useState(false);
  const [islogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (token && id) {
      getUserData(id, token, setUserInfos);
      setColorTheme(JSON.parse(window.localStorage.getItem("@SmartMenu:theme")))
    }
  }, []);
  
  useEffect(() => {
    if (token) {
      window.localStorage.setItem("@SmartMenu:token", token);
      window.localStorage.setItem("@SmartMenu:id", id);
      getUserData(id, token, setUserInfos);
    }
  }, [token]);

  useEffect(() => {
    if (islogged === true) {
      setColorTheme(JSON.parse(window.localStorage.getItem("@SmartMenu:theme")))
    }else{
      setColorTheme(defaultTheme)
    }
  }, [islogged]);
  
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
        setIsLogged(true)

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
    setIsLogged(false)
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
    console.log(updateUserInfos);
    if (updateUserInfos) {
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider
      value={{ token, id, login, logout, signUp, userInfos, colorTheme, setColorTheme, colorChange, setColorChange, changeUserInfos }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
