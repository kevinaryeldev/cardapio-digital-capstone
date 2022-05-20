import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  deleteProductApi,
  editProductApi,
  listProductApi,
  registerProductApi,
} from "../../services/products/products";
import { useAuth } from "../user/user";

export const MenuContext = createContext([]);

export const MenuProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isPaid, setIsPaid] = useState(false)

  useEffect(() => {
    listProductApi(setProducts);
  }, []);

  const { categories, setCategories } = useAuth();

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      toast.error("Categoria já existente!");
    } else {
      setCategories([...categories, newCategory]);
      toast.success("Categoria adicionada com sucesso!");
    }
  };

  const editCategory = (categoryToBeEdited, editedCategory) => {
    if (categories.includes(categoryToBeEdited)) {
      const updatedCategories = categories.map((category) => {
        if (category === categoryToBeEdited) {
          category = editCategory;
        }
        return category;
      });
      setCategories(updatedCategories);
      toast.success("Categoria editada com sucesso!");
    } else {
      toast.error("Categoria inexistente!");
    }
  };

  const removeCategory = (categoryToBeRemoved) => {
    if (categories.includes(categoryToBeRemoved)) {
      const updatedCategories = categories.filter(
        (category) => category !== categoryToBeRemoved
      );
      setCategories(updatedCategories);
      toast.success("Categoria removida com sucesso!");
    } else {
      toast.error("Categoria inexistente!");
    }
  };

  const addProduct = async (newProduct) => {
    const response = await registerProductApi(newProduct);
    if (response) {
      setProducts([...products, response.data]);
      return true;
    } else {
      return false;
    }
  };

  const editProduct = async (productId, newData) => {
    const response = await editProductApi(productId, newData);
    if (response) {
      const updatedProducts = products.map((product) => {
        if (product.id === productId) {
          product = { ...product, ...newData };
          return product;
        }
        return product;
      });
      setProducts(updatedProducts);
      return true;
    } else {
      return false;
    }
  };

  const removeProduct = async (productToBeRemoved) => {
    const response = await deleteProductApi(productToBeRemoved.id);
    if (response) {
      const updatedProducts = products.filter(
        (product) => product.id !== productToBeRemoved.id
      );
      setProducts(updatedProducts);
      return true;
    }

    return false;
  };

  return (
    <MenuContext.Provider
      value={{
        isPaymentModalOpen,
        setIsPaymentModalOpen,
        products,
        addProduct,
        editProduct,
        removeProduct,
        categories,
        addCategory,
        editCategory,
        removeCategory,isPaid, setIsPaid
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
