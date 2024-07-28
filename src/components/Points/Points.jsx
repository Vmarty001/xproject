import React, { useState } from 'react';
import Dice from '../../components/Dice/Dice';
import './Points.css';

const Points = () => {
  const [points, setPoints] = useState(0);
  const [lastRollPoints, setLastRollPoints] = useState(null);
  const [diceRolled, setDiceRolled] = useState(false);

  const handleRollComplete = (result) => {
    setLastRollPoints(result);
    setPoints(prevPoints => prevPoints + result);
    setDiceRolled(true);
  };

  const handleRollAgain = () => {
    setDiceRolled(false);
  };

  return (
    <div className="points-container">
      <div id="diceResult" className="reveal">
        Total Points: {points}
      </div>
      {!diceRolled ? (
        <Dice onRollComplete={handleRollComplete} />
      ) : (
        <div className="points-display">
          <div id="dice" data-side={lastRollPoints} className="reRoll">
            <div className="side-1 sides">{lastRollPoints === 1 && <span className="dot dot-1"></span>}</div>
            <div className="side-2 sides">{lastRollPoints === 2 && <>
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
            </>}</div>
            <div className="side-3 sides">{lastRollPoints === 3 && <>
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
            </>}</div>
            <div className="side-4 sides">{lastRollPoints === 4 && <>
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
              <span className="dot dot-4"></span>
            </>}</div>
            <div className="side-5 sides">{lastRollPoints === 5 && <>
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
              <span className="dot dot-4"></span>
              <span className="dot dot-5"></span>
            </>}</div>
            <div className="side-6 sides">{lastRollPoints === 6 && <>
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
              <span className="dot dot-4"></span>
              <span className="dot dot-5"></span>
              <span className="dot dot-6"></span>
            </>}</div>
          </div>
        </div>
      )}
      {diceRolled && <button onClick={handleRollAgain} className="roll-button">Roll now</button>}
    </div>
  );
};

export default Points;
