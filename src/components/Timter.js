import moment from "moment";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

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
        <button onClick={handleStart}>Start</button>
      )}
      {(isActive || isCompleted) && <button onClick={handleStop}>Stop</button>}
      {timeLeft !== null && (
        <div>
          <p>Time left: {moment.utc(timeLeft).format("HH:mm:ss")}</p>
        </div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  & input {
    border-radius: 50%;
    border: 1px solid #ccc;
    padding: 10px;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    font-size: 1.1em;
  }
  & button {
    font-size: 1.2em;
    font-weight: bolder;
    padding: 10px 20px;
    border-radius: 10px;
  }
  & p {
    color: white;
    font-size: 1.2em;
    border-radius: 10px;
    text-align: center;
    background-color: #a84d7e;
    padding: 5px;
  }
`;

export default Timer;
