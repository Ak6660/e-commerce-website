import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";
import { useUserContext } from "../../contexts/userContext";
import { signOutuser } from "../../utils/firebase/firebase.utils";

export default function Navigation() {
  const { currentUser, setCurrentUser } = useUserContext();

  const signOuthandler = async () => {
    await signOutuser();
    setCurrentUser(null);
  };

  return (
    <>
      <nav className="navigation">
        <NavLink className="logo-container" to="/">
          <img src="public/vite.svg" alt="logo" />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="shop">
            Shop
          </NavLink>
          <NavLink className="nav-link" to="auth">
            {currentUser ? (
              <span className="nav-link" onClick={signOuthandler}>
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
