import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from "styled-components"
import moment from 'moment'


const Revision = ({isShown}) => {  
    // const currentDate = moment().format('YYYY-MM-DD');
    const [sessions, setSessions] = useState([]);
    
    const currentDate = "2023-04-28"
    useEffect(() => {
      axios.get(`http://localhost:4000/api/tasks/rev_day/${currentDate}`)
        .then(response => {
          setSessions(response.data.payload)
          console.log("response", response)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);  

    return (
        <>
          {isShown &&  (<Wrapper>
              <h3>Revision Tasks</h3>
              <ul>
                {sessions.map(session => (
                  <li key={session.id}>
                     
                        {session.resources.length > 0 && (
                          <ul>
                              {session.resources.map((item, index) => (
                                <li key={index}>
                                  <h4>Questions generated</h4>
                                  <p>{item.question}</p>
                                  <p>{item.answer}</p>
                                </li>
                              ))}
                         </ul>
                        )}
                    
                      <h4>Subject: {session.subject}</h4>
                      <h4>Difficulty: {session.difficulty}</h4>
                      <h4>Topic: {session.topic}</h4>
                      <h4>Task: {session.task}</h4>
                  </li>
                  
                ))}
              </ul>
            </Wrapper>)
          }
      </>
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
`

export default Revision