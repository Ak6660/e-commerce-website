import { useEffect, useState } from "react";
import "./Category.scss";
import { useParams } from "react-router-dom";
import { useCategories } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/product-card/ProductCard";

function Category() {
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

export default Category;
