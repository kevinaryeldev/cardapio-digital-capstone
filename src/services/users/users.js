import { toast } from "react-toastify";
import instance from "../index";

export const loginUser = async (data) => {
  const response = await instance
    .post("/login", data)
    .then((response) => {
      window.localStorage.setItem(
        "@SmartMenu:token",
        response.data.accessToken
      );
      window.localStorage.setItem("@SmartMenu:id", response.data.user.id);

      toast.success("Login realizado com sucesso!");
      return true;
    })
    .catch((error) => {
      if (error.response.data === "Incorrect password") {
        toast.error("Senha incorreta!");
      } else if (error.response.data === "Cannot find user") {
        toast.error("Email não cadastrado!");
      } else {
        toast.error("Algo deu errado!");
      }

      return false;
    });

  return response;
};

export const signUpUser = async (data) => {
  const response = await instance
    .post("/register", data)
    .then((response) => {
      window.localStorage.setItem(
        "@SmartMenu:token",
        response.data.accessToken
      );
      window.localStorage.setItem("@SmartMenu:id", response.data.user.id);

      toast.success("Cadastro realizado com sucesso!");
      return true;
    })
    .catch((error) => {
      if (error.response.data === "Email already exists") {
        toast.error("Email já cadastrado!");
      } else {
        toast.error("Algo deu errado!");
      }

      return false;
    });

  return response;
};

export const getUserData = async (id, token, setUserInfos) => {
  const response = await instance
    .get(`/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setUserInfos(response.data);
      return response.data;
    });
  return response;
};

export const patchUserData = async (
  data,
  id,
  token,
  toastSucessMessage,
  toastErrorMessage,
  setUserInfos
) => {
  const response = await instance
    .patch(`/users/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (toastSucessMessage) {
        toast.success(toastSucessMessage);
      }
      setUserInfos(response.data);
      return true;
    })
    .catch((error) => {
      if (toastErrorMessage) {
        toast.error(toastErrorMessage);
      }
      return false;
    });

  return response;
};
