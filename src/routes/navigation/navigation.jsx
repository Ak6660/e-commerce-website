import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";
import { useUserContext } from "../../contexts/userContext";

export default function Navigation() {
  const { currentUser } = useUserContext();
  console.log(currentUser);
  return (
    <>
      <nav className="navigation">
        <NavLink className="logo-container" to="/">
          <img src="/public/vite.svg" alt="logo" />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="shop">
            Shop
          </NavLink>
          <NavLink className="nav-link" to="auth">
            Sign-In
          </NavLink>
        </div>
      </nav>
      <Outlet />
      <footer>@ copyright Ayush Kumar</footer>
    </>
  );
}
