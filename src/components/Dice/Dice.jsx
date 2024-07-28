import React, { useState, useEffect } from 'react';
import './Dice.css';

const Dice = ({ onRollComplete }) => {
  const [side, setSide] = useState(1);
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    if (rolling) {
      const rollTimeout = setTimeout(() => {
        const newSide = Math.floor(Math.random() * 6) + 1;
        setSide(newSide);
        setRolling(false);
        onRollComplete(newSide);
      }, 1500); // Время вращения
      return () => clearTimeout(rollTimeout);
    }
  }, [rolling, onRollComplete]);

  const handleRoll = () => {
    setRolling(true);
  };

  useEffect(() => {
    handleRoll();
  }, []);

  return (
    <div className="dice-container">
      <div id="dice" data-side={side} className={rolling ? '' : 'reRoll'}>
        <div className="side-1 sides">
          <span className="dot dot-1"></span>
        </div>
        <div className="side-2 sides">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
        </div>
        <div className="side-3 sides">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
        </div>
        <div className="side-4 sides">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
        </div>
        <div className="side-5 sides">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
        </div>
        <div className="side-6 sides">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
          <span className="dot dot-6"></span>
        </div>
      </div>
    </div>
  );
};

export default Dice;
