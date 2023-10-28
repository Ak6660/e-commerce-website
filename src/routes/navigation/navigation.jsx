import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";
import { useUserContext } from "../../contexts/userContext";
import { signOutuser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
// import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { useCartContext } from "../../contexts/CartDropdownContext";
import { lazy } from "react";
import { Suspense } from "react";
const CartDropdown = lazy(() =>
  import("../../components/cart-dropdown/CartDropdown")
);

export default function Navigation() {
  const { currentUser } = useUserContext();
  const { isDropdownOpen, setIsDropdownOpen } = useCartContext();

  const handleCartDropdownClick = (e) => {
    setIsDropdownOpen(!isDropdownOpen);
    e.stopPropagation();
  };

  return (
    <div>
      <nav className="navigation">
        <NavLink className="logo-container" to="/">
          <img src="/vite.svg" alt="logo" />
          <span>Mystery Clothing</span>
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="shop">
            Shop
          </NavLink>
          <NavLink className="nav-link" to="auth">
            {currentUser ? (
              <span onClick={signOutuser}>Sign Out</span>
            ) : (
              <span>Sign In</span>
            )}
          </NavLink>
          <CartIcon onClick={handleCartDropdownClick} />
        </div>
      </nav>
      {isDropdownOpen && (
        <Suspense fallback={<h1>Loading....</h1>}>
          <CartDropdown />
        </Suspense>
      )}
      <div className="page-content">
        <Outlet />
      </div>
      <footer className="footer">@ copyright Ayush Kumar</footer>
    </div>
  );
}
