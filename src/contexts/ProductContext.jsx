import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
// import products from "../001 shop-data.json";
// import ShopData from "../utils/shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      const categoriesTitle = Object.keys(categoryMap);
      const productsArr = categoriesTitle.map((category) => {
        const title = category[0].toUpperCase() + category.slice(1);
        const items = categoryMap[category];
        return { title, items };
      });
      setProducts(productsArr);
    };
    getCategoriesMap();
  }, []);
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
