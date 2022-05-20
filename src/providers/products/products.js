import { createContext, useContext, useState, useEffect } from "react";
import {
  deleteProductApi,
  editProductApi,
  listProductApi,
  registerProductApi,
} from "../../services/products/products";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    listProductApi(setProducts);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, addProduct, editProduct, removeProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
