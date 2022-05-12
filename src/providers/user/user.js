import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, signUpUser } from "../../services/users/users";
import { errorToast, successToast } from "../../utils/toast";

const UserContext = createContext();

export function UserProvider({ children }) {
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
      successToast("Login realizado com sucesso!");
      setToken(accessToken);
      setId(userId);
    } else {
      errorToast("Algo deu errado!");
    }
  };

  const logout = () => {
    window.localStorage.removeItem("@SmartMenu:token");
    window.localStorage.removeItem("@SmartMenu:id");
    successToast("Logout realizado com sucesso!");
    setToken(null);
  };

  const signUp = async (data) => {
    const response = await signUpUser(data);
    const accessToken = JSON.parse(
      window.localStorage.getItem("@SmartMenu:token")
    );
    const userId = JSON.parse(window.localStorage.getItem("@SmartMenu:id"));

    if (response) {
      successToast("Cadastrado realizado com sucesso!");
      setToken(accessToken);
      setId(userId);
    } else {
      errorToast("Algo deu errado!");
    }
  };

  return (
    <UserContext.Provider value={{ token, id, login, logout, signUp }}>
      {children}
    </UserContext.Provider>
  );
}

export const useAuth = () => useContext(UserContext);
