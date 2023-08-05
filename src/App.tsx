import React, { useState, useRef, useEffect } from 'react';
import './App.css'

const App: React.FC = () => {
  const [breakLength, setBreakLength] = useState<number>(5);
  const [sessionLength, setSessionLength] = useState<number>(25);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timerLabel, setTimerLabel] = useState<string>("Session");
  const [timeLeft, setTimeLeft] = useState<number>(sessionLength * 60);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            audioRef.current?.play();
            if (timerLabel === "Session") {
              setTimerLabel("Break");
              return breakLength * 60;
            } else {
              setTimerLabel("Session");
              return sessionLength * 60;
            }
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, breakLength, sessionLength, timerLabel]);
  

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimerLabel("Session");
    setTimeLeft(25 * 60);
  };

  const handleBreakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength((prevBreakLength) => prevBreakLength - 1);
    }
  };

  const handleBreakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength((prevBreakLength) => prevBreakLength + 1);
    }
  };

  const handleSessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength((prevSessionLength) => prevSessionLength - 1);
    }
  };

  const handleSessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength((prevSessionLength) => prevSessionLength + 1);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="App">
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button id="break-decrement" onClick={handleBreakDecrement}>-</button>
      <button id="break-increment" onClick={handleBreakIncrement}>+</button>
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionLength}</div>
      <button id="session-decrement" onClick={handleSessionDecrement}>-</button>
      <button id="session-increment" onClick={handleSessionIncrement}>+</button>
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <button id="start_stop" onClick={handleStartStop}>Start/Stop</button>
      <button id="reset" onClick={handleReset}>Reset</button>
      <audio id="beep" ref={audioRef} src="/beep.mp3" />
    </div>
  );
};

export default App;
