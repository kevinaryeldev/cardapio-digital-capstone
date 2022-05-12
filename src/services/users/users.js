import { toast } from "react-toastify";
import instance from "../index";

export async function loginUser(data) {
  const response = await instance
    .post("/login", data)
    .then((response) => {
      window.localStorage.setItem(
        "@SmartMenu:token",
        JSON.stringify(response.data.accessToken)
      );
      window.localStorage.setItem(
        "@SmartMenu:id",
        JSON.stringify(response.data.user.id)
      );

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
}

export async function signUpUser(data) {
  const response = await instance
    .post("/register", data)
    .then((response) => {
      window.localStorage.setItem(
        "@SmartMenu:token",
        JSON.stringify(response.data.accessToken)
      );
      window.localStorage.setItem(
        "@SmartMenu:id",
        JSON.stringify(response.data.user.id)
      );

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
}
