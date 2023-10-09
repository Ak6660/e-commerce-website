import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";
import { useUserContext } from "../../contexts/userContext";
import { signOutuser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { useCartContext } from "../../contexts/CartDropdownContext";

export default function Navigation() {
  const { currentUser } = useUserContext();
  const { isDropdownOpen, setIsDropdownOpen } = useCartContext();

  const handleCartDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="navigation">
        <NavLink className="logo-container" to="/">
          <img src="/vite.svg" alt="logo" />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="shop">
            Shop
          </NavLink>
          <NavLink className="nav-link" to="auth">
            {currentUser ? (
              <span className="nav-link" onClick={signOutuser}>
                Sign Out
              </span>
            ) : (
              <span className="nav-link">Sign In</span>
            )}
          </NavLink>
          <CartIcon onClick={handleCartDropdownClick} />
        </div>
      </nav>
      {isDropdownOpen && <CartDropdown />}
      <Outlet />
      <footer>@ copyright Ayush Kumar</footer>
    </>
  );
}
