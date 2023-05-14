import styled from "styled-components";
// import { Button } from "./Button.styled";

const DirectAccess = ({ setIsLoggedIn }) => {
  const handleClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <DirectAccessButton onClick={handleClick}>Direct Access</DirectAccessButton>
  );
};

const DirectAccessButton = styled.button`
  width: 120px;
  padding: 5px 15px;
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: bolder;
  border: none;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    background-color: #eab8d7;
    color: white;
  }
`;
export default DirectAccess;
