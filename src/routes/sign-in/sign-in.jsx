import {
  signInWithGooglePopup,
  createUsersDoc
} from '../../utils/firebase/firebase.utils';

export default function SignIn() {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUsersDoc(user);
    } catch (error) {
      console.error('Error', error);
    }
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
}
