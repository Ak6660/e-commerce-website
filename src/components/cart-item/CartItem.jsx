import PropTypes from "prop-types";
import "./CartItem.styles.scss";

function CartItem({ cartItem }) {
  const { name, quantity } = cartItem;
  return (
    <div className="cart-item">
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
}
CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;
