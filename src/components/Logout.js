import styled, { css } from "styled-components";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebaseConfig";
import { Button } from "./Button.styled";

function Logout({ setIsLoggedIn }) {
  const auth = getAuth(firebaseApp);

  const handleLogout = () => {
    setIsLoggedIn(false);
    auth.signOut();
  };

  return <LogoutButton onClick={handleLogout}>Log out</LogoutButton>;
}

const LogoutButton = styled(Button)`
  width: 120px;
  background-color: white;
  color: black;
  font-size: 16px;

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
export default Logout;
