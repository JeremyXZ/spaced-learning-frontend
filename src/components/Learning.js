import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "./Button.styled";

const Learning = ({ userInput, setUserInput, handleClick }) => {
  const { subject, task, difficulty, topic, prompt } = userInput;

  const textareaRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [userInput]);

  return (
    <Wrapper>
      <TitleWrapper>Learning Zone</TitleWrapper>
      <FormWrapper onSubmit={(e) => handleClick(e)}>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="topic">Topic</label>
          <input
            id="topic"
            type="text"
            name="topic"
            value={topic}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty</label>
          <input
            id="difficulty"
            type="text"
            name="difficulty"
            value={difficulty === 0 ? "" : difficulty}
            onChange={handleChange}
            placeholder="0 - 10"
          />
        </div>
        <div>
          <label htmlFor="prompt">AI Options:</label>
          <select
            id="prompt"
            name="prompt"
            onChange={(e) => handleChange(e)}
            value={prompt}
          >
            <option value="">-- Choose --</option>
            <option value="qzQuestions">Create Questions</option>
            <option value="essay">Write an Essay</option>
            <option value="summary">Write a Summary</option>
          </select>
        </div>

        <div className="area">
          <label htmlFor="task">Content</label>
          <StyledTextarea
            id="task"
            type="text"
            name="task"
            value={task}
            ref={textareaRef}
            onChange={handleChange}
            placeholder="Enter your text here..."
          />
        </div>
        <Button type="submit">Save Data</Button>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  font-size: 1.2em;
`;

const TitleWrapper = styled.h2`
  align-self: flex-start;
`;

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto auto 1f;
  grid-row-gap: 20px;
  grid-column-gap: 30px;
  width: 100%;

  .area {
    grid-column: 1/-1;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input,
  select {
    min-width: 12.5em;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  select {
    min-width: 13.2em;
  }
`;

const StyledTextarea = styled.textarea`
  /* resize: none; */
  height: auto;
  overflow: hidden;
  min-height: 48px;
  min-width: 35em;
  width: 100%;
  padding: 8px;
  border: 2px solid #ccc;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 12px;
`;

export default Learning;
