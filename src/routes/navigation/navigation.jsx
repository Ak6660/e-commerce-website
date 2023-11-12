import { Outlet, NavLink } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import { signOutuser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import { useCartContext } from "../../contexts/CartDropdownContext";
import { lazy } from "react";
import { Suspense } from "react";

import CartDropdown from "../../components/cart-dropdown/CartDropdown";

export default function Navigation() {
  const { currentUser } = useUserContext();
  const { isDropdownOpen, setIsDropdownOpen } = useCartContext();

  const handleCartDropdownClick = (e) => {
    setIsDropdownOpen(!isDropdownOpen);
    e.stopPropagation();
  };

  return (
    <>
      <nav className="jumbotron sticky-top rounded-0 d-flex align-items-center justify-content-between bg-secondary text-white p-0">
        <NavLink className="ml-3 text-white" to="/">
          <img src="/vite.svg" alt="logo" />
          <span>Mystery Clothing</span>
        </NavLink>
        <div className=" d-flex mr-3 align-items-center ">
          <NavLink className=" mr-5 text-white" to="shop">
            Shop
          </NavLink>
          <NavLink className="mr-5 text-white" to="auth">
            {currentUser ? (
              <span onClick={signOutuser}>Sign Out</span>
            ) : (
              <span>Sign In</span>
            )}
          </NavLink>
          <CartIcon onClick={handleCartDropdownClick} />
        </div>
      </nav>
      {isDropdownOpen && <CartDropdown />}
      <div className="container">
        <Outlet />
      </div>
      <footer className="jumbotron sticky-bottom rounded-0 bg-secondary p-0 mt-4 text-center text-white m-0">
        @ copyright Ayush Kumar
      </footer>
    </>
  );
}
