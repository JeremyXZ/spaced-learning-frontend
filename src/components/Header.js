import React from "react";
import styled from "styled-components";
import Timer from "./Timter";
import Login from "./Login";
import Logout from "./Logout";
import DirectAccess from "./DirectAccess";

const Header = ({ revisionCount, setIsLoggedIn, isLoggedIn }) => {
  return (
    <Wrapper>
      <TitleWrapper>Spaced Learning App</TitleWrapper>
      <HeaderBottomWrapper>
        <ItemWrapper>
          <h2>Revision Item: </h2>{" "}
          <div>{isLoggedIn ? revisionCount : null}</div>
        </ItemWrapper>
        <TimerWrapper>
          <h2>Timer:</h2>
          <Timer isLoggedIn={isLoggedIn} />
        </TimerWrapper>
        {isLoggedIn ? (
          <Logout setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}
        <DirectAccess setIsLoggedIn={setIsLoggedIn} />
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
  & div {
    display: grid;
    place-content: center;
    background-color: #5cb270;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1em;
    line-height: 1.2;
    text-align: center;
    width: 2.3em;
    height: 2em;
    border-radius: 50%;
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
