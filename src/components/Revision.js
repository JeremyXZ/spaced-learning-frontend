import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";

const Revision = ({ isShown, setRevisionCount }) => {
  const [sessions, setSessions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const currentDate = moment().format("YYYY-MM-DD");
  // const currentDate = "2023-05-01";

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/tasks/rev_day/${currentDate}`)
      .then((response) => {
        const payload = response.data.payload;
        setSessions(payload);
        setRevisionCount(sessions.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentDate, setRevisionCount, sessions]);

  return (
    <>
      {isShown && (
        <Wrapper>
          <h2>Revision Zone</h2>
          <ul>
            {sessions.map((session) => (
              <li key={session.id}>
                <InfoWrapper>
                  <p>Subject: {session.subject}</p>
                  <p>Topic: {session.topic}</p>
                  <p>Difficulty: {session.difficulty}</p>
                </InfoWrapper>
                <h4>
                  Task: <br /> {session.task}
                </h4>
                {session.resources.length > 0 && (
                  <ul>
                    {session.resources.map((item, index) => (
                      <li key={index}>
                        <p onClick={() => setSelectedAnswer(index)}>
                          {JSON.parse(item)?.question}
                        </p>
                        {selectedAnswer === index && (
                          <p>{JSON.parse(item)?.answer}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                <Divider className="divider" />
              </li>
            ))}
          </ul>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 90%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  font-size: 1.2em;
  & h2 {
    align-self: self-start;
  }
  & ul {
    list-style: none;
  }
  & ul li:last-child .divider {
    display: none;
  }
`;

const InfoWrapper = styled.h3`
  display: flex;
  justify-content: space-between;
  /* padding: 0 10px; */
  font-weight: bolder;
`;

const Divider = styled.hr`
  margin: 25px auto 30px;
  padding: 0;
  border: 0;
  border-top: dashed 3px;
  text-align: center;

  &:after {
    content: "✍️";
    display: inline-block;
    position: relative;
    top: -1rem;
    padding: 1 1rem;
    font-family: FontAwesome;
    font-size: 3rem;
    background-color: #abd2fa; //match background color
  }
`;

export default Revision;
