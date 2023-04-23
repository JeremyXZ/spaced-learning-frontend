import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import wordsCount from "words-count";


const Learning = ({userInput, setUserInput}) => {

    
    const [numOfWord, setNumofWord] = useState('')
    const textareaRef = useRef(null);
  
    const handleChange = (event) => {
      setUserInput(event.target.value);
    };
  
    const getWordCount = (event) => {
        setNumofWord(wordsCount(event.target.value))
    }
    useEffect(() => {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }, [userInput]);

    
    return (
        <Wrapper>
            <TitleWrapper>Learning Zone</TitleWrapper>
            <FormWrapper>
                    <div>
                        <label>Subject</label>
                        <input/>
                    </div>
                    <div>
                        <label>Topic</label>
                        <input/>
                    </div>
                    <div>
                        <label>Difficulty</label>
                        <input/>
                    </div>
                    <div>
                        <div>WordCount: </div>
                        <div>{numOfWord}</div>
                    </div>
                   
                    <div class="area">
                        <label>Content</label>
                        {/* <textarea 
                        value={height}
                        onInput={handleInput}
                        rows="5" cols="30"
                        ></textarea>   */}
                        <StyledTextarea
                        ref={textareaRef}
                        value={userInput}
                        onChange={handleChange}
                        placeholder="Enter your text here..."
                        onInput={getWordCount}
                        />
                    </div>    
                
            </FormWrapper>
            <p>Resources</p>
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


const TitleWrapper = styled.h3`
    align-self: flex-start;
`

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto auto 1f;
  grid-row-gap: 20px; 
  grid-column-gap: 30px; 
  max-width: 100%;

  .area{
    
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
  `

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




export default Learning