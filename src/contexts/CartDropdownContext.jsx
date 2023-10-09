import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartDropdownContext = createContext();

const CartDropdownProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const value = { isDropdownOpen, setIsDropdownOpen };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartDropdownContext);
};

CartDropdownProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartDropdownProvider;
