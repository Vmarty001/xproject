import React, { useState } from 'react';
import Dice from '../../components/Dice/Dice';
import './Points.css';

const Points = () => {
  const [points, setPoints] = useState(null);
  const [diceRolled, setDiceRolled] = useState(false);

  const handleRollComplete = (diceValue) => {
    const randomPoints = Math.floor(Math.random() * 500) + 1;
    setPoints(randomPoints);
    setDiceRolled(true);
  };

  return (
    <div className="points-container">
      {!diceRolled ? (
        <Dice onRollComplete={handleRollComplete} />
      ) : (
        <div className="points-display">
          <div className="dice-container">
            <div id="dice" data-side={points % 6 || 6} className="reRoll">
              <div className="side-1 sides"><div className="dot dot-1">{points}</div></div>
              <div className="side-2 sides"><div className="dot dot-1">{points}</div></div>
              <div className="side-3 sides"><div className="dot dot-1">{points}</div></div>
              <div className="side-4 sides"><div className="dot dot-1">{points}</div></div>
              <div className="side-5 sides"><div className="dot dot-1">{points}</div></div>
              <div className="side-6 sides"><div className="dot dot-1">{points}</div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Points;
