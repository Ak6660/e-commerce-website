import { useCartContext } from "../../contexts/CartDropdownContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import "./Checkout.scss";

const Checkout = () => {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  const handleGotoShop = () => {
    navigate("/shop");
  };

  if (!cartItems.length) {
    return (
      <div className="empty-cart">
        <h2>Empty Cart</h2>
        <Button onClick={handleGotoShop}>Go to Shop</Button>
      </div>
    );
  }

  return (
    <div className="checkout-items-container">
      <h2>Products Details</h2>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} product={item} />
      ))}
      <div>
        <h3 className="cart-total">Total:</h3>
        <span className="cart-total-price">${total}</span>
      </div>
    </div>
  );
};

export default Checkout;
