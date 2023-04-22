import React from "react";
import styled from "styled-components";



const Learning = () => {
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
                    <div>WordCount</div>
                    <div>
                        <label>Content</label>
                        <textarea></textarea>  
                    </div>    
                
            </FormWrapper>
            <p>Resources</p>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    /* width:100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    font-size: 1.2em;
    min-height: 100%;
`;


const TitleWrapper = styled.h3`
    align-self: flex-start;
`

// const FormWrapper = styled.form`
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // gap: 5px;
// `

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 10px; 
  grid-column-gap: 20px; 
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  textarea {
    width: 100%;
    height: 100px;
  }
`; 




export default Learning