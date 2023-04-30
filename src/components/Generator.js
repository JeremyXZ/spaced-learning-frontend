import styled from "styled-components";
import React from "react";
import axios from "axios";
import { showQuestionAnswer } from "../utils";
import { Button } from "./Button.styled";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const Generator = ({
  userInput,
  setQuestions,
  questions,
  handleShow,
  isShown,
}) => {
  const { task, prompt } = userInput;
  const selectedOption = prompt;

  const createQuestions = async (task, prompt) => {
    if (task.trim() === "") {
      alert("Error: No input in Content");
      return;
    }

    if (selectedOption === "qzQuestions") {
      prompt = `Generate quiz questions and answers based on the following text: '${task}'`;
    } else if (selectedOption === "essay") {
      prompt = `write an essay based on the following instructions: '${task}'`;
    } else if (selectedOption === "summary") {
      prompt = `write a summary based on the following text '${task}'`;
    }

    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt,
        max_tokens: 1024,
        n: 1,
        stop: "",
        temperature: 0.5,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log("response", response);
    const newData = showQuestionAnswer(response);
    setQuestions(newData);
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
  margin-top: 30px;
  align-items: center;
  & ul {
    list-style: none;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  gap: 30px;
`;

export default Generator;
