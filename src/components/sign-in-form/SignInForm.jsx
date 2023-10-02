import { useState } from "react";
import { FormInput } from "../form-input/FormInput";
import { Button } from "../button/Button";
import {
  createUsersDoc,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const defaultFormfields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormfields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormfields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email || !password) return;
      const { user } = await signInUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err.message);
    } finally {
      resetFormFields();
    }
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUsersDoc(user);
    } catch (error) {
      console.error("Error", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>{`I already have an account`}</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container ">
          <Button type="submit">Sign In </Button>
          <Button buttontype="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
