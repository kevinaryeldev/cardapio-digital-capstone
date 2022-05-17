import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  deleteProduct,
  registerProduct,
} from "../../services/products/products";

export const MenuContext = createContext([]);

export const MenuProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([
    "Entradas",
    "Pratos Principais",
    "Bebidas",
    "Sobremesas",
  ]);

  useEffect(() => console.log(products), [products]);

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
    const response = await registerProduct(newProduct);
    if (response) {
      setProducts([...products, response.data]);
      return true;
    } else {
      return false;
    }
  };

  const removeProduct = async (productToBeRemoved) => {
    const response = await deleteProduct(productToBeRemoved);
    if (response) {
      const updatedProducts = products.filter(
        (product) => product.id !== productToBeRemoved.id
      );
      setProducts(updatedProducts);
    }
  };

  return (
    <MenuContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        categories,
        addCategory,
        editCategory,
        removeCategory,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
