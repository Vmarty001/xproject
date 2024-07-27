import React from 'react';
import { ReactTyped } from 'react-typed';
import './welcome.css';

const Greeting = ({ user }) => {
  return (
    <div className="greeting-container">
      <ReactTyped
        strings={[`Hello, ${user?.username}`]}
        typeSpeed={40}
        showCursor={false}
      />
      <span className={'username'}>
        {user?.username}
      </span>
      <span className="blinking-cursor">.</span>
    </div>
  );
};

export default Greeting;
