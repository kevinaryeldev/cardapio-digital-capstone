import { toast } from "react-toastify";
import instance from "../index";

export const registerProduct = async (data) => {
  const token = JSON.parse(window.localStorage.getItem("@SmartMenu:token"));
  const response = await instance
    .post("/products", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      toast.success("Produto adicionado com sucesso!");
      return response;
    })
    .catch((error) => {
      toast.error("Ocorreu algum erro!");
      return false;
    });

  return response;
};

export const deleteProduct = async (productId) => {
  const token = JSON.parse(window.localStorage.getItem("@SmartMenu:token"));
  const userId = JSON.parse(window.localStorage.getItem("@SmartMenu:id"));

  const response = await instance
    .post(`/products/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      toast.success("Produto removido com sucesso!");
      return response;
    })
    .catch((error) => {
      toast.error("Ocorreu algum erro!");
      return false;
    });

  return response;
};
