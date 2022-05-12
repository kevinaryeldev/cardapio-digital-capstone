import { toast } from "react-toastify";

export const successToast = (message) => {
  toast(message, {
    type: "success",
    position: toast.POSITION.TOP_RIGHT,
    style: {
      backgroundColor: "var(--secondary-color)",
      color: "var(--primary-color)",
      fontWeight: "bold",
    },
    progressStyle: {
      backgroundColor: "var(--positive-color)",
    },
  });
};

export const errorToast = (message) => {
  toast(message, {
    type: "error",
    position: toast.POSITION.TOP_RIGHT,
    style: {
      backgroundColor: "var(--secondary-color)",
      color: "var(--primary-color)",
      fontWeight: "bold",
    },
    progressStyle: {
      backgroundColor: "var(--negative-color)",
    },
  });
};
