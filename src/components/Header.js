import React from "react";
import styled from "styled-components";
import Timer from "./Timter";

const Header = ({ revisionCount, setIsExploding }) => {
  return (
    <Wrapper>
      <TitleWrapper>Spaced Learning App</TitleWrapper>
      <HeaderBottomWrapper>
        <ItemWrapper>
          Revision Item: <span>{revisionCount}</span>
        </ItemWrapper>
        <TimerWrapper>
          <Timer setIsExploding={setIsExploding} />
        </TimerWrapper>
      </HeaderBottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 1.5em;
  font-size: 1em;
  background-color: #4d7ea8;
`;

const TitleWrapper = styled.h1`
  letter-spacing: 0.07em;
`;

const HeaderBottomWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemWrapper = styled.div`
  font-size: 1.17em;
  font-weight: bolder;

  & span {
    display: inline-block;
    background-color: #a84d7e;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1.2;
    text-align: center;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    box-shadow: 0 0 5px #ff0000;
    margin-left: 5px;
  }
`;

const TimerWrapper = styled.div``;

export default Header;
