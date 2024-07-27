import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './points.css';

const Points = () => {
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const randomPoints = Math.floor(Math.random() * 500) + 1;
    setPoints(randomPoints);
    // Отображаем окно через 1 секунду для примера
    setTimeout(() => {
      alert(`You got ${randomPoints} points!`);
    }, 1000);
  }, []);

  const handleOkeyClick = () => {
    navigate('/');
  };

  return (
    <div className="points-container">
      <div className="points-display">
        Points: {points}
      </div>
      <button className="okey-button" onClick={handleOkeyClick}>Okey</button>
    </div>
  );
};

export default Points;
