import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/CartDropdownContext";
import { Button } from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.styles.scss";
import { useEffect, useRef } from "react";
// import PropTypes from "prop-types";

const CartDropdown = () => {
  const { cartItems, setIsDropdownOpen } = useCartContext();
  const navigate = useNavigate();
  const dropdown = useRef();

  useEffect(() => {
    function handleClick(e) {
      console.log("clicked outside");
      if (dropdown.current && !dropdown.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [setIsDropdownOpen]);

  const handleCheckout = () => {
    navigate("/checkout");
    setIsDropdownOpen((open) => !open);
  };

  const handleGotoShop = () => {
    navigate("/shop");
    setIsDropdownOpen((open) => !open);
  };

  return (
    <div ref={dropdown} className="cart-dropdown-container">
      {!cartItems.length ? (
        <>
          <div className="cart-items">
            <h3>Cart Empty</h3>
          </div>
          <Button onClick={handleGotoShop}>Goto Shop</Button>
        </>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <Button onClick={handleCheckout}>Checkout</Button>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
