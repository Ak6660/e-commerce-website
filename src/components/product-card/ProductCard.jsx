import "./ProductCard.styles.scss";
import PropTypes from "prop-types";
import { Button } from "../button/Button";
import { useEffect } from "react";
import { useRef } from "react";
import { useCartContext } from "../../contexts/CartDropdownContext";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addToCart } = useCartContext();
  const imageRef = useRef();

  useEffect(() => {
    const imgEl = imageRef.current;

    const imgObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.src = imageUrl;
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (imgEl) {
      imgObserver.observe(imgEl);
    }
    return () => {
      if (imgEl) {
        imgObserver.unobserve(imgEl);
      }
    };
  }, [imageRef, imageUrl]);

  return (
    <div className="product-card-container">
      <img ref={imageRef} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vero
        aperiam eum
      </div>
      <Button buttontype="inverted" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
