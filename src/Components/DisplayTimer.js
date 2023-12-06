import React from 'react';

const DisplayTimer = ({ timerDisplay }) => {
  const minutes = Math.floor(timerDisplay / 60000);
  const seconds = Math.floor((timerDisplay % 60000) / 1000);

  return (
    <p className="App-placeholder">
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </p>
  );
};

export default DisplayTimer;