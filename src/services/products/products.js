import { toast } from "react-toastify";
import instance from "../index";

export const listProductApi = async (setProducts) => {
  const userId = window.localStorage.getItem("@SmartMenu:id");
  const response = await instance
    .get(`/products/?userId=${userId}`)
    .then((response) => {
      setProducts(response.data);
      return response.data;
    })
    .catch((error) => {
      return false;
    });

  return response;
};

export const registerProductApi = async (data) => {
  const token = window.localStorage.getItem("@SmartMenu:token");
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

export const editProductApi = async (productId, data) => {
  const token = window.localStorage.getItem("@SmartMenu:token");
  const response = await instance
    .patch(`/products/${productId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      toast.success("Produto editado com sucesso!");
      return response;
    })
    .catch((error) => {
      toast.error("Ocorreu algum erro!");
      return false;
    });

  return response;
};

export const deleteProductApi = async (productId) => {
  const token = window.localStorage.getItem("@SmartMenu:token");
  const response = await instance
    .delete(`/products/${productId}`, {
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
