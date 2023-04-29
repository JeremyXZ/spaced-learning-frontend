import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Learning from "./Learning";
import Revision from "./Revision";
import CreateQuiz from "./CreateQuiz";
import axios from "axios";

const baseURL = "http://localhost:4000/api/tasks/";

const App = () => {
  const [userInput, setUserInput] = useState({
    subject: "",
    topic: "",
    task: "",
    difficulty: 0,
    word_count: "",
  });
  const [questions, setQuestions] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const saveData = async (questions, userInput) => {
    try {
      const response = await axios.post(baseURL, { userInput, questions });
      console.log("response", response);
    } catch (err) {
      console.error(err);
    }
  };
  const handleShow = () => {
    setIsShown(!isShown);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    saveData(questions, userInput);
  };
  console.log("app questons state", questions);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <MainWrapper>
          <Learning
            userInput={userInput}
            setUserInput={setUserInput}
            handleClick={handleClick}
          />

          <CreateQuiz
            userInput={userInput}
            setQuestions={setQuestions}
            questions={questions}
            handleShow={handleShow}
            isShown={isShown}
          />

          <Revision isShown={isShown} />
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
    }
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
  background-color: purple;
  color: white;
  min-height: 100%;
  max-width: 100%;
  display: grid;
  place-content: center;
  padding: 20px;
`;

export default App;
