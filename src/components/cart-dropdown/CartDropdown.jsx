import { useCartContext } from "../../contexts/CartDropdownContext";
import { Button } from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.styles.scss";
import PropTypes from "prop-types";

const CartDropdown = () => {
  const { cartItems } = useCartContext();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

CartDropdown.propTypes = {};

export default CartDropdown;
