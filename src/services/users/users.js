import { toast } from "react-toastify";
import instance from "../index";

export const loginUser = async (data) => {
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
};

export const signUpUser = async (data) => {
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
};

export const getUserData = async (id, token) => {
  const response = await instance
    .get(`/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
    .then((response) => {
      return response.data
    })

  return response;
};

export const patchName = async (data, id, token) => {
  const response = await instance
    .patch(`/users/${id}`, {
      name: data
    }, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
    .then((response) => {
      return response.data
    })

  return response;
};

export const patchEmail = async (data, id, token) => {
  const response = await instance
    .patch(`/users/${id}`, {
      email: data
    }, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
    .then((response) => {
      toast.success("Email atualizado com sucesso!");
      return true
    })
    .catch((error) => {
      toast.error("Email inválido");
      return false
    })

  return response;
};

export const patchPassword = async (data, id, token) => {
  const response = await instance
    .patch(`/users/${id}`, {
      password: data
    }, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
    .then((response) => {
      toast.success("Senha atualizada com sucesso!");
    })
    .catch((error) => {
      toast.error("Senha inválida");
    })

  return response;
};
