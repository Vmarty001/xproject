import React from 'react';
import { ReactTyped } from 'react-typed';
import './welcome.css';
import {useTelegram} from "../../hooks/useTelegram";

const Greeting = ({ name }) => {
  const {user, onClose} = useTelegram();
  return (
    <div className="greeting-container">
      <ReactTyped
        strings={[`Hello, ${user?.username}`]}
        typeSpeed={40}
        showCursor={false}
      />
      <span className="blinking-cursor">.</span>
    </div>
  );
};

export default Greeting;
