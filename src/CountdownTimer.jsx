import React, { useEffect, useState } from 'react'
import './salespage.css'


const CountdownTimer = () => {
  const COUNTDOWN_DURATION = 3600; // 1 hour in seconds
  const STORAGE_KEY = 'countdownn-endd';

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let endTime = localStorage.getItem(STORAGE_KEY);

    if (!endTime) {
      // No saved end time? Create one
      endTime = Date.now() + COUNTDOWN_DURATION * 1000;
      localStorage.setItem(STORAGE_KEY, endTime);
    }

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const remainingTime = Math.max(0, Math.floor((endTime - currentTime) / 1000));
      setTimeLeft(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(interval);
        localStorage.removeItem(STORAGE_KEY); // optional: clear storage when countdown ends
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="countdown-container">
      <h2>Access Restricted In:</h2>
      <div className="timer">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default CountdownTimer;

