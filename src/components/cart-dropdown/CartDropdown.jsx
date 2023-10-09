import { Button } from "../button/Button";
import "./CartDropdown.styles.scss";
import PropTypes from "prop-types";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Checkout</Button>
    </div>
  );
};

CartDropdown.propTypes = {};

export default CartDropdown;
