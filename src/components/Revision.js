import React from "react";
import styled from "styled-components";



const Revision = ({userInput, setQuestions, questions}) => {
    const { subject, difficulty,  word_count, topic} = userInput

    return (
        <Wrapper>
            <h3>Revision Zone</h3>
            <h4>Subject: {subject}</h4>
            <h4>Topic: {topic}</h4>
            <h4>Difficulty: {difficulty}</h4>
            <h4>Word count: {word_count}</h4>                         
            
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