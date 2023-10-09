import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import products from "../001 shop-data.json";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const value = {
    products,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProducts = () => useContext(ProductContext);

export default ProductProvider;
