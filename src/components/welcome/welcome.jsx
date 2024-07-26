import React from 'react';
import { ReactTyped } from 'react-typed';
import './welcome.css';

const Greeting = ({ name }) => {
  return (
    <div className="greeting-container">
      <ReactTyped
        strings={[`Hello, ${name}`]}
        typeSpeed={40}
        showCursor={false}
      />
      <span className="blinking-cursor">.</span>
    </div>
  );
};

export default Greeting;
