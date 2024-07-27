import React from 'react';
import { ReactTyped } from 'react-typed';
import './welcome.css';
import { useTelegram } from "../../hooks/useTelegram";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { user } = useTelegram();
  const navigate = useNavigate();

  const handleStart = () => {
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
      <p className="instruction-text">Press and Hold</p>
      <a className="start-button" onClick={handleStart}>
        Start
        <span></span><span></span><span></span><span></span>
      </a>
    </div>
  );
};

export default Welcome;
