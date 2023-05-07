import moment from "moment";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Button } from "./Button.styled";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const handleStart = () => {
    const now = moment();
    const alarmTime = now.clone().add(hours, "hours").add(minutes, "minutes");
    const duration = moment.duration(alarmTime.diff(now));
    setTimeLeft(duration.asMilliseconds());
    setIsActive(true);
    setIsCompleted(false);
  };

  const handleStop = () => {
    setIsActive(false);
    setIsCompleted(false);
    setTimeLeft(null);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft !== null && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1000);
      }, 1000);
    } else if (isActive && timeLeft !== null && timeLeft <= 0) {
      setIsCompleted(true);
      setTimeLeft(null);
      toast.success("Time is up! Please stop your current task.", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  return (
    <Wrapper>
      <input type="number" value={hours} onChange={handleHoursChange} />
      <input type="number" value={minutes} onChange={handleMinutesChange} />
      {!isActive && !isCompleted && (
        <TimerButton onClick={handleStart}>Start</TimerButton>
      )}
      {(isActive || isCompleted) && (
        <TimerButton onClick={handleStop}>Stop</TimerButton>
      )}
      {timeLeft !== null && (
        <div>
          <p>Time left: {moment.utc(timeLeft).format("HH:mm:ss")}</p>
        </div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-left: 10px;
  & input {
    border-radius: 50%;
    border: 1px solid #ccc;
    padding: 8px;
    width: 1.3em;
    height: 1.3em;
    margin-right: 5px;
    font-size: 1.1em;
    text-align: center;
  }

  & p {
    color: white;
    border-radius: 10px;
    text-align: center;
    background-color: #a84d7e;
    padding: 5px;
  }
`;
const TimerButton = styled(Button)`
  width: 120px;
  background-color: white;
  color: black;
  font-size: 16px;
  margin: 5px;

  &:hover {
    background-color: #eab8d7;
    color: white;
  }
`;

export default Timer;
