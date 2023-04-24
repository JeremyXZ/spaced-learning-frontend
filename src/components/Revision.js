import React from "react";
import styled from "styled-components";


const Revision = (userInput, {questions}) => {
    const { subject, task, difficulty,  word_count, topic} = userInput
    return (
        <Wrapper>
            <h3>Revision Zone</h3>
            <h4>{subject}</h4>
            { questions?.length > 0  && questions.map((question, index) => (
            <div key={index}>
                <h3>Question {index + 1}</h3>
                <p>{question.question}</p>
                <p>Answer: {question.answer}</p>
            </div>
      ))
            }
            <p>Topic: {topic}</p>
             <p>Difficulty: {difficulty}</p>
            <p>Content: {task}</p>
            <p>Word count: {word_count}</p>
           
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width:100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    font-size: 1.2em;
    
    
`;
export default Revision