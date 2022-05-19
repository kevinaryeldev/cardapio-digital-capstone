import { toast } from "react-toastify";
import instance from "./../";

export const addRequestApi = async (cartProducts) => {
  const token = window.localStorage.getItem("@SmartMenu:token");
  const id = localStorage.getItem("@SmartMenu:id");
  const data = {
    group: {
      request: cartProducts,
      table: 1,
    },
    userId: id,
  };
  const response = await instance
    .post("/cart/", data, {
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
