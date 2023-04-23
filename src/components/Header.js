import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Wrapper>
            <TitleWrapper>Spaced Learning App</TitleWrapper>
            <HeaderBottomWrapper>
                <ClockWrapper>Clock</ClockWrapper>
                <TimerWrapper>Timer</TimerWrapper>
            </HeaderBottomWrapper>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    /* display: grid; /* create nested grid */
    /* grid-template-columns: 1fr 1fr;  */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    padding: 1em;
    font-size: 1em;
    background-color: gold;
    

    @media only screen and (min-width: 750px) {
    font-size: 1.2rem;
    
  }
`;

const TitleWrapper = styled.h1`    
    letter-spacing: 0.07em;
`

const HeaderBottomWrapper = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`

const ClockWrapper = styled.div`
    /* align-self: flex-start; */
    

`

const TimerWrapper = styled.div`
    /* align-self: flex-end; */
`
export default Header