import { useCartContext } from "../../contexts/CartDropdownContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import "./Checkout.scss";

const Checkout = () => {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();

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
      <h3>Products Details</h3>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Checkout;
