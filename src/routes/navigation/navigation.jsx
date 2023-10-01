import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <NavLink className="logo-container" to="/">
          Home-Logo
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="shop">
            Shop
          </NavLink>
          <NavLink className="nav-link" to="sign-in">
            Sign-In
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
