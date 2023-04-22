import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Learning from './Learning'
import Revision from './Revision'

const GlobalStyle = createGlobalStyle`
    html,
    body,
    root {
    height: 100%;
    }
`

const App = () => {
    return(
        <>
        <GlobalStyle />
        <Wrapper>
            <Header/>
            <MainWrapper>
                <Learning/>
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(200, 300) 1fr;
  margin: 10px;
  max-width: 1200px;
  min-width: 350px;
  min-height: 100%;
  /* background-color: green; */
`;

const MainWrapper = styled.div`
background-color: purple;
min-height: 100%;
width: 100%;
/* min-width: 100vh; */
/* @media only screen and (min-width: 750px) {
    margin-top: 20px;
  } */
`



export default App