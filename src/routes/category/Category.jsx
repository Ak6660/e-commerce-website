import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Category.scss";
import { useParams } from "react-router-dom";
import { useCategories } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/product-card/ProductCard";

function Category({ props }) {
  const { category } = useParams();
  const { categories } = useCategories();
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

Category.propTypes = {};

export default Category;
