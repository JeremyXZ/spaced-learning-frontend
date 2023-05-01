import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Learning from "./Learning";
import Revision from "./Revision";
import Generator from "./Generator";
import axios from "axios";
import ConfettiExplosion from "react-confetti-explosion";

const baseURL = "http://localhost:4000/api/tasks/";

const initialInput = {
  subject: "",
  topic: "",
  task: "",
  difficulty: 0,
  word_count: "",
  prompt: "",
};
const App = () => {
  const [userInput, setUserInput] = useState(initialInput);
  const [questions, setQuestions] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [revisionCount, setRevisionCount] = useState(0);
  const [isExploding, setIsExploding] = React.useState(false);

  const dbInput = {
    subject: userInput.subject,
    topic: userInput.topic,
    task: userInput.task,
    difficulty: userInput.difficulty,
    word_count: userInput.word_count,
  };
  const saveData = async (questions, dbInput) => {
    try {
      const response = await axios.post(baseURL, { dbInput, questions });
      console.log("response", response);
    } catch (err) {
      console.error(err);
    }
  };
  const clearData = () => {
    setUserInput(initialInput);
  };

  const clearQuestions = () => {
    setQuestions([]);
  };

  const handleShow = () => {
    setIsShown(!isShown);
    clearQuestions();
  };

  const handleClick = async (e) => {
    e.preventDefault();
    saveData(questions, dbInput);
    clearData();
  };
  console.log("app questons state", questions);
  console.log("App dbInput", dbInput);

  return (
    <>
      <>
        {isExploding && (
          <ConfettiExplosion
            force={0.6}
            duration={3000}
            particleCount={120}
            width={1000}
          />
        )}
      </>
      ;
      <GlobalStyle />
      <Wrapper>
        <Header revisionCount={revisionCount} setIsExploding={setIsExploding} />
        <MainWrapper>
          <Learning
            userInput={userInput}
            setUserInput={setUserInput}
            handleClick={handleClick}
          />

          <Generator
            userInput={userInput}
            setQuestions={setQuestions}
            questions={questions}
            handleShow={handleShow}
            isShown={isShown}
          />

          <Revision isShown={isShown} setRevisionCount={setRevisionCount} />
        </MainWrapper>
      </Wrapper>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
    html,
    body,
    root {
    height: 100%; 
    font-family: 'Poppins', sans-serif;  
    },

`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(200, 300) 1fr;
  margin: auto;
  max-width: 1200px;
  min-width: 350px;
  min-height: 100%;
`;

const MainWrapper = styled.div`
  background-color: #abd2fa;
  color: black;
  min-height: 100%;
  max-width: 100%;
  display: grid;
  place-content: center;
  padding: 20px;
`;

export default App;
