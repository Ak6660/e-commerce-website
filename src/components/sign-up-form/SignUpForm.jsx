import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUsersDoc,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      throw new Error("Password is not same");
    }
    if (!displayName || !email || !password || !confirmPassword) {
      throw new Error("Please provide required details");
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        createUsersDoc({ ...user, displayName });
        resetFormFields();
      } catch (error) {
        console.error("Error while creating user", error);
      }
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
