import moment from "moment";
import React, { useState, useEffect } from "react";

function Timer({ setIsExploding }) {
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
    setIsCompleted(true);
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
      setIsExploding(true);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, setIsExploding]);

  return (
    <div>
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
    </div>
  );
}

export default Timer;
