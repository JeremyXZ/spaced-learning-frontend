import styled from "styled-components";
import React from "react";
import axios from "axios";
import { showQuestionAnswer } from "../utils";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const CreateQuiz = ({
  userInput,
  setQuestions,
  questions,
  handleShow,
  isShown,
}) => {
  const { task } = userInput;

  const createQuestions = async (task) => {
    if (task.trim() === "") {
      alert("Error: No input in Content");
      return;
    }
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: `Generate quiz questions and answers based on the following text: '${task}`,
        max_tokens: 1024,
        n: 1,
        stop: ["Question:"],
        temperature: 0.5,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const newQuiz = showQuestionAnswer(response);
    setQuestions(newQuiz);
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={() => createQuestions(task)}>Create Questions</Button>
        <Button onClick={handleShow}>Show Revision</Button>
      </ButtonWrapper>
      <ul>
        {questions.length > 0 &&
          questions.map((question, index) => (
            <li key={index}>
              <p>{question.question}</p>
              <p>{question.answer}</p>
            </li>
          ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  & ul {
    list-style: none;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

const Button = styled.button`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 50%;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  padding: 0 2px;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  flex: 1;
  margin: 0 30px;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;

export default CreateQuiz;
