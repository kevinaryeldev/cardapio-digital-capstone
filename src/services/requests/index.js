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
