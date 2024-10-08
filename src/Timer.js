import React, { useState, useEffect } from 'react';

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Timer;
