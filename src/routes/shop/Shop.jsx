import "./Shop.styles.scss";
import { useProducts } from "../../contexts/ProductContext";
import ProductCard from "../../components/product-card/ProductCard";

const Shop = () => {
  const { products } = useProducts();
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
