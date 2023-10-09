import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (product) => {
    const itemExist = cartItems.find((item) => item.id === product.id);
    if (itemExist) {
      const newItem = { ...itemExist, quantity: itemExist.quantity + 1 };
      return setcartItems((curItems) =>
        curItems.map((item) => (item.id === product.id ? newItem : item))
      );
    } else {
      const newItem = { ...product, quantity: 1 };
      return setcartItems((curItems) => [...curItems, newItem]);
    }
  };

  const value = { isDropdownOpen, setIsDropdownOpen, cartItems, addToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
