import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../firebaseConfig";

const provider = new GoogleAuthProvider();

const Login = ({ setAuthUser }) => {
  const auth = getAuth(firebaseApp);

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setAuthUser(user);
        console.log("Signed in as:", user.displayName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
