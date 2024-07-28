// Welcome.jsx
import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import './welcome.css';
import { useTelegram } from "../../hooks/useTelegram";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Welcome = () => {
  const { user } = useTelegram();
  const navigate = useNavigate();
  const [isHeld, setIsHeld] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 3000); // Задержка 3 секунды для отображения кнопки и текста

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setIsHeld(true);
    setStartTime(Date.now());
  };

  const handleEnd = async () => {
    setIsHeld(false);
    const holdTime = Date.now() - startTime;
    if (holdTime >= 2000) { // 2 секунды удерживания
      try {
        await axios.post('http://localhost:3000/add-user', { username: user.username });
        console.log('User added successfully');
      } catch (error) {
        console.error('Error adding user:', error);
      }
      navigate('/points');
    }
  };

  useEffect(() => {
    if (isHeld) {
      const timer = setTimeout(() => {
        if (isHeld) {
          handleEnd();
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isHeld]);

  return (
    <div className="greeting-container">
      <ReactTyped
        strings={[`Hello, ${user?.username}`]}
        typeSpeed={40}
        showCursor={false}
        onComplete={() => setShowElements(true)}
      />
      <span className="blinking-cursor">.</span>
      {showElements && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Welcome;
