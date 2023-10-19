import PropTypes from "prop-types";
import "./CheckoutItem.styles.scss";
import { useCartContext } from "../../contexts/CartDropdownContext";

const CheckoutItem = ({ product }) => {
  const { name, price, imageUrl, quantity } = product;
  const { incrementQuantity, decrementQuantity, removeItem } = useCartContext();
  return (
    <div className="checkout-item-container">
      <img className="checkout-item-image" src={imageUrl} alt={name} />
      <div className="checkout-item-details">
        <h3>{name}</h3>
        <div className="checkout-item-price">
          <span>${price}</span> x
          <span>
            <button
              onClick={() => decrementQuantity(product)}
              className="quantity-btn"
            >
              &lt;
            </button>
            {quantity}
            <button
              onClick={() => incrementQuantity(product)}
              className="quantity-btn"
            >
              &gt;
            </button>
          </span>
          <h4>Total:</h4>
          <span>${price * quantity}</span>
        </div>
      </div>
      <div onClick={() => removeItem(product)} className="remove-btn">
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CheckoutItem;
