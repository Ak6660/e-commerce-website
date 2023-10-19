import { FormInput } from "../../components/form-input/FormInput";
import { Button } from "../../components/button/Button";
import "./AdminDashBoard.scss";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const admin = {
  username: "AyushKumar",
  password: "12345678",
};

const initialValue = {
  username: "",
  password: "",
};

const AdminDashBoard = () => {
  const [adminDetails, setAdminDetails] = useState(admin);
  const [isLogin, setIsLogin] = useState(false);
  const [userInput, setUserInput] = useState(initialValue);
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (!value) return;
    setUserInput((curInputs) => ({ ...curInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInput.username === adminDetails.username &&
      userInput.password === adminDetails.password
    ) {
      navigate("admin-panel");
      setIsLogin(true);
      setUserInput(initialValue);
    } else {
      setUserInput(initialValue);
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <div className="admin-page">
      <div className="admin-login">
        {!isLogin ? (
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Username"
              onChange={handleInputs}
              value={userInput.username}
              type="text"
              name="username"
              required
            />
            <FormInput
              label="Password"
              onChange={handleInputs}
              value={userInput.password}
              type="password"
              name="password"
              required
            />
            <Button type="submit">Login</Button>
          </form>
        ) : (
          <div className="form-container">
            <div className="admin-logout">
              <h3>Welcome Admin</h3>
              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
              <hr />
            </div>
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

AdminDashBoard.propTypes = {};

export default AdminDashBoard;
