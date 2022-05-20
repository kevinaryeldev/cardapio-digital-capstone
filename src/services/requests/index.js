import { toast } from "react-toastify";
import instance from "./../";

export const addRequestApi = async (demmand) => {
  const token = window.localStorage.getItem("@SmartMenu:token");
  const id = localStorage.getItem("@SmartMenu:id");
  const response = await instance
    .post("/cart/", demmand, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      toast.success("Pedido enviado!");
      return response;
    })
    .catch((error) => {
      toast.error("Ocorreu algum erro!");
      return false;
    });

  return response;
};

export const editRequestApi = async (newDemmand, demmandId) => {
  const token = window.localStorage.getItem("@SmartMenu:token");

  const response = await instance
    .patch(`/cart/${demmandId}`, newDemmand, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      toast.success(`Pedido atualizado com sucesso!`);
      return response;
    })
    .catch((error) => {
      toast.error("Ocorreu algum erro e o pedido não foi atualizado!");
      return false;
    });

  return response;
};
