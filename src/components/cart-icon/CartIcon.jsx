import PropTypes from "prop-types";
import "./CartIcon.styles.scss";

const CartIcon = ({ onClick }) => {
  return (
    <div className="cart-icon-container" onClick={onClick}>
      <img
        src="/004 shopping-bag.svg"
        className="shopping-icon"
        alt="cart-icon"
      />
      <span className="item-count">0</span>
    </div>
  );
};

CartIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CartIcon;
