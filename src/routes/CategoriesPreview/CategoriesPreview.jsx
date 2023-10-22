import React from "react";
import PropTypes from "prop-types";
import { useCategories } from "../../contexts/CategoriesContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const { categories } = useCategories();

  return Object.keys(categories).map((title) => (
    <CategoryPreview key={title} title={title} products={categories[title]} />
  ));
};

CategoriesPreview.propTypes = {};

export default CategoriesPreview;
