import './App.css';
//Models
import Timer from './Models/timer';
import Task from './Models/task';
import TaskList from './Models/taskList';
import Node from './Models/node';
//Components
import DisplayTimer from './Components/DisplayTimer';
import Button from './Components/Button';
import TaskContainer from './Components/TaskContainer';
//Images
import playIcon from './Images/play_icon.png'; 
import forwardIcon from './Images/fastForward_icon.png'; 
import addTimeIcon from './Images/addTime_icon.png'; 

import React, { useState, useEffect } from 'react';



function App() {
  const [timer, setTimer] = useState(new Timer(25)); // Timer instance
  const [timerDisplay, setTimerDisplay] = useState(25 * 60 * 1000); // Timer display in milliseconds
  const [period, setPeriod] = useState('work'); // Work or break
  const [isRunning, setIsRunning] = useState(false);
  const [extended, setExtended] = useState(false); // Add this state variable

  // Onclick Functions
  const startTimer = () => {
    if (isRunning) return; // If the timer is running, do nothing
    setIsRunning(true); // Set the timer to running
    timer.startTimer();
    const interval = setInterval(() => {
      setTimerDisplay(timer.getCurrentTime());
      if (timer.finished) {
        clearInterval(interval);
        setIsRunning(false); // Set the timer to not running
        // Switch period
        if (period === 'work') {
          setPeriod('break');
          setTimer(new Timer(5)); // 5 minutes break
        } else {
          setPeriod('work');
          setTimer(new Timer(25)); // 25 minutes work
        }
      }
    }, 1000);
  };

  const fastForward = () => {
    timer.fastForward(period); // Pass the current period to fastForward
    setIsRunning(false); // Set the timer to not running
  
    // Switch period and set the timer to the next period's associated time
    if (period === 'work') {
      setPeriod('break');
      setTimer(new Timer(5)); // 5 minutes break
      setTimerDisplay(5 * 60 * 1000); // Update the timer display
    } else {
      setPeriod('work');
      setTimer(new Timer(25)); // 25 minutes work
      setTimerDisplay(25 * 60 * 1000); // Update the timer display
      setExtended(false); // Reset extended to false when a new work period starts
    }
  };

  const extendTime = () => {
    // Only extend the timer if it's the work period, hasn't been extended yet, and the timer is running
    if (period === 'work' && !extended && isRunning) {
      timer.extendTime(); // Add 5 minutes to the current timer
      const newTime = timer.getCurrentTime();
      setTimerDisplay(newTime); // Update the timer display
      setExtended(true); // Mark the timer as extended
    }
  };

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>LoveDoro Timer</h1>
      </header>
      <DisplayTimer timerDisplay={timerDisplay} />

      <div className="button-container">
        <Button className="App-button" onClick={extendTime} icon={addTimeIcon} altText="Extend Time" />
        <Button className="App-button" onClick={startTimer} icon={playIcon} altText="Start Timer" />
        <Button className="App-button" onClick={fastForward} icon={forwardIcon} altText="Fast Forward" />
      </div>
      <TaskContainer />


    </div>
  );
}

export default App;

//commit testing
//testing