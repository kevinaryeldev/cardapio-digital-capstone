import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginUser, signUpUser } from "../../services/users/users";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    window.localStorage.getItem("@SmartMenu:token")
  );

  const [id, setId] = useState(window.localStorage.getItem("@SmartMenu:id"));

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("@SmartMenu:token", JSON.stringify(token));
      window.localStorage.setItem("@SmartMenu:id", JSON.stringify(id));
    }
  }, [token]);

  const login = async (data) => {
    const response = await loginUser(data);
    const accessToken = JSON.parse(
      window.localStorage.getItem("@SmartMenu:token")
    );
    const userId = JSON.parse(window.localStorage.getItem("@SmartMenu:id"));

    if (response) {
      setId(userId);
      setTimeout(setToken, 501, accessToken);
    }
  };

  const logout = () => {
    window.localStorage.removeItem("@SmartMenu:token");
    window.localStorage.removeItem("@SmartMenu:id");
    toast.success("Logout realizado com sucesso!");
    setToken(null);
    setId(null);
  };

  const signUp = async (data) => {
    const response = await signUpUser(data);
    const accessToken = JSON.parse(
      window.localStorage.getItem("@SmartMenu:token")
    );
    const userId = JSON.parse(window.localStorage.getItem("@SmartMenu:id"));

    if (response) {
      setId(userId);
      setTimeout(setToken, 501, accessToken);
    }
  };

  return (
    <UserContext.Provider value={{ token, id, login, logout, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
