import styled, { css } from "styled-components";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../firebaseConfig";
import { Button } from "./Button.styled";

const provider = new GoogleAuthProvider();

const Login = ({ setIsLoggedIn }) => {
  const auth = getAuth(firebaseApp);

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setIsLoggedIn(true);
        console.log("Signed in as:", user.displayName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <LoginButton onClick={handleSignInWithGoogle}>
        Sign in with Google
      </LoginButton>
    </div>
  );
};

const LoginButton = styled(Button)`
  width: 120px;
  background-color: white;
  color: black;
  font-size: 14px;
  line-height: 18px;
  padding: 2px 3px;

  ${(props) =>
    !props.isLoggedIn &&
    css`
      opacity: 1;
      cursor: pointer;
    `}

  &:hover {
    background-color: #eab8d7;
    color: white;
  }
`;

export default Login;
