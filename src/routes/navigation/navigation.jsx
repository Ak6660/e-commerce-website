import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";
import { useUserContext } from "../../contexts/userContext";
import { signOutuser } from "../../utils/firebase/firebase.utils";

export default function Navigation() {
  const { currentUser } = useUserContext();

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
        </div>
      </nav>
      <Outlet />
      <footer>@ copyright Ayush Kumar</footer>
    </>
  );
}
