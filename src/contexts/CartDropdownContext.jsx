import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useUserContext } from "./userContext";

const CartContext = createContext();

const addQuantity = (arr, id) => {
  const itemExist = arr.find((item) => item.id === id);
  if (itemExist) {
    return { ...itemExist, quantity: itemExist.quantity + 1 };
  }
  return null;
};

const CartProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setcartItems] = useState(() => []);
  const { currentUser } = useUserContext();

  useEffect(() => {
    // Getting Data from Local Storage
    if (!currentUser) {
      const cartItemsFromLocal = window.localStorage.getItem("cart");
      if (cartItemsFromLocal && cartItemsFromLocal.length) {
        const itemsToAdd = JSON.parse(cartItemsFromLocal);
        setcartItems((s) => [...s, ...itemsToAdd]);
      } else setcartItems([]);
    }
  }, [currentUser]);

  useEffect(() => {
    // Saaving Data in Local Storage

    window.localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const newItem = addQuantity(cartItems, product.id);

    if (newItem) {
      return setcartItems((curItems) =>
        curItems.map((item) => (item.id === product.id ? newItem : item))
      );
    } else {
      const newItem = { ...product, quantity: 1 };
      return setcartItems((curItems) => [...curItems, newItem]);
    }
  };

  const incrementQuantity = (product) => {
    const increasedQuantity = { ...product, quantity: product.quantity + 1 };
    setcartItems((curItems) =>
      curItems.map((item) =>
        item.id === product.id ? increasedQuantity : item
      )
    );
  };

  const decrementQuantity = (product) => {
    const decreasedQuantity = { ...product, quantity: product.quantity - 1 };
    decreasedQuantity.quantity
      ? setcartItems((curItems) =>
          curItems.map((item) =>
            item.id === product.id ? decreasedQuantity : item
          )
        )
      : setcartItems((curItems) =>
          curItems.filter((item) => item.id !== product.id)
        );
  };

  const removeItem = (product) => {
    setcartItems((curItems) =>
      curItems.filter((item) => item.id !== product.id)
    );
  };

  const value = {
    isDropdownOpen,
    setIsDropdownOpen,
    cartItems,
    addToCart,
    decrementQuantity,
    incrementQuantity,
    removeItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
