import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Learning from "./Learning";
import Revision from "./Revision";
import Generator from "./Generator";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebaseConfig";

const baseURL = "https://spaced-learning-backend.onrender.com/api/tasks/";

const initialInput = {
  subject: "",
  topic: "",
  task: "",
  difficulty: 0,
  prompt: "",
};
const App = () => {
  const [userInput, setUserInput] = useState(initialInput);
  const [questions, setQuestions] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [revisionCount, setRevisionCount] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dbInput = {
    subject: userInput.subject,
    topic: userInput.topic,
    task: userInput.task,
    difficulty: userInput.difficulty,
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

  //firebase codes below:
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        // console.log("Signed in as:", displayName);
      } else {
        // User is signed out

        console.log("Not signed in.");
      }
    });

    // Clean up subscription
    return () => unsubscribe();
  }, [auth]);

  console.log(firebaseApp);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ToastContainer theme="colored" autoClose={false} />
        <Header
          revisionCount={revisionCount}
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />

        <MainWrapper>
          <Learning
            userInput={userInput}
            setUserInput={setUserInput}
            handleClick={handleClick}
            isLoggedIn={isLoggedIn}
          />

          <Generator
            userInput={userInput}
            setQuestions={setQuestions}
            questions={questions}
            handleShow={handleShow}
            isShown={isShown}
            isLoggedIn={isLoggedIn}
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
  padding: 0 5px;
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
