import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/CartDropdownContext";
import { Button } from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.styles.scss";
// import PropTypes from "prop-types";

const CartDropdown = () => {
  const { cartItems, setIsDropdownOpen } = useCartContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
    setIsDropdownOpen((open) => !open);
  };

  const handleGotoShop = () => {
    navigate("/shop");
    setIsDropdownOpen((open) => !open);
  };

  if (!cartItems.length) {
    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          <h3>Cart Empty</h3>
        </div>
        <Button onClick={handleGotoShop}>Goto Shop</Button>
      </div>
    );
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;