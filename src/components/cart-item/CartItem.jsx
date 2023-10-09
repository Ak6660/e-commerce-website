import PropTypes from "prop-types";
import "./CartItem.styles.scss";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price} $
        </span>
      </div>
    </div>
  );
}
CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;
