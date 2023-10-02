import { SignInForm } from "../../components/sign-in-form/SignInForm";
import { SignUpForm } from "../../components/sign-up-form/SignUpForm";

export default function Authentication() {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
