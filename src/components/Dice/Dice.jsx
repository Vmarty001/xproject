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
      }, 2500); // Увеличено время вращения
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
        <div className="side-1 sides">{side === 1 && <div className="dot dot-1">{side}</div>}</div>
        <div className="side-2 sides">{side === 2 && (
          <>
            <div className="dot dot-1">{side}</div>
            <div className="dot dot-2"></div>
          </>
        )}</div>
        <div className="side-3 sides">{side === 3 && (
          <>
            <div className="dot dot-1">{side}</div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </>
        )}</div>
        <div className="side-4 sides">{side === 4 && (
          <>
            <div className="dot dot-1">{side}</div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
          </>
        )}</div>
        <div className="side-5 sides">{side === 5 && (
          <>
            <div className="dot dot-1">{side}</div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
          </>
        )}</div>
        <div className="side-6 sides">{side === 6 && (
          <>
            <div className="dot dot-1">{side}</div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
            <div className="dot dot-6"></div>
          </>
        )}</div>
      </div>
    </div>
  );
};

export default Dice;
