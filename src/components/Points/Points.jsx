import React, { useState, useEffect } from 'react';
import './Points.css';

const Points = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const randomPoints = Math.floor(Math.random() * 500) + 1;
    setPoints(randomPoints);
  }, []);

  return (
    <div className="points-container">
      <div className="points-display">
        Points: {points}
      </div>
    </div>
  );
};

export default Points;
