import React, { useState, useEffect } from 'react';
import { formatTime } from '../utils/helpers';

const Timer = ({ duration, onTimeUp, category }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp, duration]);

  return (
    <div className="timer-container">
      <div className="timer-category">{category.toUpperCase()} QUIZ</div>
      <div className="timer-display">
        Time Left: {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default Timer;