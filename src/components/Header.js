import React from "react";
import styled from "styled-components";
import Timer from "./Timter";
import Login from "./Login";
import Logout from "./Logout";

const Header = ({ revisionCount, setIsLoggedIn, isLoggedIn }) => {
  return (
    <Wrapper>
      <TitleWrapper>Spaced Learning App</TitleWrapper>
      <HeaderBottomWrapper>
        <ItemWrapper>
          <h2>Revision Item: </h2> <p>{isLoggedIn ? revisionCount : 0}</p>
        </ItemWrapper>
        <TimerWrapper>
          <h2>Timer:</h2>
          <Timer />
        </TimerWrapper>
        {isLoggedIn ? (
          <Logout setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}
      </HeaderBottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 1.5em;
  font-size: 1em;
  background-color: #4d7ea8;
`;

const TitleWrapper = styled.h1`
  letter-spacing: 0.07em;
  font-weight: bolder;
  font-size: 3em;
`;

const HeaderBottomWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.17em;
  font-weight: bolder;
  gap: 10px;
  & p {
    display: grid;
    place-content: center;
    background-color: #5cb270;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1em;
    line-height: 1.2;
    text-align: center;
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    /* box-shadow: 0 0 5px #ff0000; */
    /* margin-lef: 10px; */
    margin-right: 2em;
  }
`;

const TimerWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 1.17em;
  font-weight: bolder;
`;

export default Header;
