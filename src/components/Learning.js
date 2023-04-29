import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import wordsCount from "words-count";

const Learning = ({ userInput, setUserInput, handleClick }) => {
  const { subject, task, difficulty, topic, word_count } = userInput;

  const textareaRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
      word_count: wordsCount(value),
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
          />
        </div>
        <div>
          <div>WordCount: </div>
          <div>{word_count}</div>
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

const TitleWrapper = styled.h3`
  align-self: flex-start;
`;

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto auto 1f;
  grid-row-gap: 20px;
  grid-column-gap: 30px;
  max-width: 100%;

  .area {
    grid-column: 1/-1;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    min-width: 12.5em;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

const StyledTextarea = styled.textarea`
  resize: none;
  overflow: hidden;
  min-height: 48px;
  width: 35em;
  padding: 8px;
  border: 2px solid #ccc;
  font-size: 16px;
  line-height: 1.5;
`;

const Button = styled.button`
  background-color: dodgerblue;
  border: 2px solid #422800;
  border-radius: 15px;
  box-shadow: #422800 4px 4px 0 0;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  padding: 0 2px;
  line-height: 40px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  grid-column: 1 / -1;
  /* /* text-align: center; */
  width: 200px;
  margin: 0 auto;

  &:hover {
    background-color: #fff;
    color: black;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;

export default Learning;
