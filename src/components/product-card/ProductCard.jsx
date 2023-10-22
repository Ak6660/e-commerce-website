import "./ProductCard.styles.scss";
import PropTypes from "prop-types";
import { Button } from "../button/Button";
import { useEffect } from "react";
import { useRef } from "react";
import { useCartContext } from "../../contexts/CartDropdownContext";

const ProductCard = ({ product = {} }) => {
  const { name, imageUrl, price } = product;
  const { addToCart, cartItems } = useCartContext();
  const imageRef = useRef();
  const inCart = cartItems.find((item) => item.id == product.id);

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
        threshold: 0.2,
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

  const handleAddToCart = () => addToCart(product);

  return (
    <div className="product-card-container">
      <img ref={imageRef} alt={name} />
      <div className="footer-card ">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vero
        aperiam eum
      </div>
      {inCart ? (
        <Button disabled={true}>Added</Button>
      ) : (
        <Button buttontype="inverted" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
