import { useState } from "react";
import "./SignUpForm.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUsersDoc,
} from "../../utils/firebase/firebase.utils";

import { FormInput } from "../form-input/FormInput";
import { Button } from "../button/Button";

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
    try {
      if (password !== confirmPassword) {
        resetFormFields();
        throw new Error("Password is not same");
      }
      if (!displayName || !email || !password || !confirmPassword) {
        resetFormFields();
        throw new Error("Please provide required details");
      }
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUsersDoc({ ...user, displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, Email is already in use");
      } else {
        console.error("Error while creating user", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>{`Don't have an account?`}</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} autoComplete="on">
        <FormInput
          label="Display name"
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
          required
        />

        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          required
        />

        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
