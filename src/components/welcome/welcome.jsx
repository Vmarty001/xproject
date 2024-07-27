import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import './welcome.css';
import { useTelegram } from "../../hooks/useTelegram";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { user } = useTelegram();
  const navigate = useNavigate();
  const [isHeld, setIsHeld] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const handleStart = () => {
    setIsHeld(true);
    setStartTime(Date.now());
  };

  const handleEnd = () => {
    setIsHeld(false);
    const holdTime = Date.now() - startTime;
    if (holdTime >= 2000) { // 2 seconds hold time
      navigate('/points');
    }
  };

  useEffect(() => {
    if (isHeld) {
      const timer = setTimeout(() => {
        if (isHeld) {
          navigate('/points');
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isHeld, navigate]);

  return (
    <div className="greeting-container">
      <ReactTyped
        strings={[`Hello, ${user?.username}`]}
        typeSpeed={40}
        showCursor={false}
      />
      <span className="blinking-cursor">.</span>
      <p className="instruction-text">Press and Hold</p>
      <a
        className={`start-button ${isHeld ? 'active' : ''}`}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onContextMenu={(e) => e.preventDefault()}
      >
        Start
        <span></span><span></span><span></span><span></span>
      </a>
    </div>
  );
};

export default Welcome;
