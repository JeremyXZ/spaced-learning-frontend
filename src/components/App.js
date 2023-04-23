import React, {useState} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Learning from './Learning'
import Revision from './Revision'
import {Configuration, OpenAIApi} from 'openai'
import axios from "axios"

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });


const createQuestions = async (userInput) => {
    const prompt = `Generate questions from this text:\n${userInput}`
    const response = await openai.completions.create({
    engine: 'davinci',
    prompt,
    maxTokens: 60,
    n: 3,
    stop: ['\n'],
  })
  return response.choices.map((choice) => choice.text.trim())
        
}

const saveData = (questions, userInput) => {


}
const handleClicik = async() => {
    const questions = await createQuestions(userInput)
    setQuestions(questions)
    saveData(questions)
}

const App = () => {
    const [userInput, setUserInput] = useState('')
    const [questons, setQuestions] = userState([])

    return(
        <>
        <GlobalStyle />
        <Wrapper>
            <Header/>
            <MainWrapper>
                <Learning userInput={userInput} setUserInput={setUserInput}/>
                <Revision/>
            </MainWrapper>
           
        </Wrapper>
        </>
    )
}

// const Wrapper = styled.div`
  
//     display: grid;
//     /* grid-template-columns: minmax(23em 80em);
//     grid-template-rows: 9.375em auto; */
//     width: 850px;

//     margin: 0.625em;
//     gap: 0.625em;
//     /* min-width: 22em;
//     max-width: 75em; */
//     height: 100vh;
//     background-color: green;
    
//  `

const GlobalStyle = createGlobalStyle`
    html,
    body,
    root {
    height: 100%;
    }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(200, 300) 1fr;
  margin: 10px;
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
/* flex-direction: column; */
/* justify-content: center; */
/* align-items: center; */

`



export default App