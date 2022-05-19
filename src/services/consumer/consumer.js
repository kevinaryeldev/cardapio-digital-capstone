import { toast } from "react-toastify";
import instance from "../index";

export const getProducts = async () => {
    const response = await instance 
        .get(`/products`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.data
        })
    return response
}
  