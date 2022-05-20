import instance from "../index";

export const getProducts = async (id) => {
  const response = await instance
    .get(`/products?userId=${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
  return response;
};
