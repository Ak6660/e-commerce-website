import "./Shop.styles.scss";
import { useProducts } from "../../contexts/ProductContext";
import ProductCard from "../../components/product-card/ProductCard";
import { useCartContext } from "../../contexts/CartDropdownContext";

const Shop = () => {
  const { products } = useProducts();
  const { setIsDropdownOpen } = useCartContext();

  return (
    <div>
      {products.map((category, index) => (
        <div key={index} className="category">
          <h4 className="category-title">{category.title}</h4>
          <div className="products-container">
            {category.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
