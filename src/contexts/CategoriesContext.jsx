import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
// import products from "../001 shop-data.json";
// import ShopData from "../utils/shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

const CategoryContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = {
    categories,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCategories = () => useContext(CategoryContext);

export default CategoriesProvider;
