import React from 'react';
import './Popup.css';
import Scores from './Scores';

const Popup = () => {
  return (
    <div className="App">
      <header>Fifa 22 Scores (Since Yesterday)</header>
      <Scores />
    </div>
  );
};

export default Popup;
