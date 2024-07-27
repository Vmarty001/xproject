import React from 'react';
import { ReactTyped } from 'react-typed';
import './welcome.css';
import { useTelegram } from "../../hooks/useTelegram";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { user } = useTelegram();
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/points');
  };

  return (
    <div className="greeting-container">
      <ReactTyped
        strings={[`Hello, ${user?.username}`]}
        typeSpeed={40}
        showCursor={false}
      />
      <span className="blinking-cursor">.</span>
      <button className="start-button" onClick={handleStartClick}>Start</button>
    </div>
  );
};

export default Welcome;
