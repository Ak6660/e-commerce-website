import PropTypes from "prop-types";
import "./CartIcon.styles.scss";
import { useCartContext } from "../../contexts/CartDropdownContext";

const CartIcon = ({ onClick }) => {
  const { cartItems } = useCartContext();
  const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  return (
    <div className="cart-icon-container" onClick={onClick}>
      <img
        src="/004 shopping-bag.svg"
        className="shopping-icon"
        alt="cart-icon"
      />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

CartIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CartIcon;
