import React from 'react';
import Typical from 'react-typical';
import './welcome.css';

const Greeting = ({ name }) => {
  return (
    <div className="greeting-container">
      <Typical
        steps={[`Hello, ${name}`, 1000]}
        wrapper="p"
      />
    </div>
  );
};

export default Greeting;
