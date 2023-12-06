import React, { useState } from 'react';
import Button from './Button';
import addIcon from '../Images/add_icon.png';
import TaskList from '../Models/taskList';
import Task from '../Models/task';
import playIcon from '../Images/play_icon.png'; 


const TaskContainer = () => {
  const [taskList, setTaskList] = useState(new TaskList());
  const [newTask, setNewTask] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleSaveClick = () => {
    // Create a new Task object with the description set to newTask
    let task = new Task(newTask);
    // Insert the new task into the existing taskList
    taskList.insertTask(task);
    // Reset the newTask state to an empty string
    setNewTask('');
    setIsAdding(false);
  };

  return (
    <div className = "TaskList-div">
        <div className="Task-header">
            <h2 className="Task-title">My Tasks</h2>
            <Button icon={addIcon} className="App-button" altText="Add Task" onClick={handleAddClick} />
        </div>
        {/* if is adding is true, show the input field and save button */}
        {isAdding && (
            <div className="CreateTask-div">
            {/* Save input as newTask, always get the most up to date text field with on change  */}
            <input type="text" className="Task-input" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={handleSaveClick}>Save</button>
            </div>
        )}
        <ul className = "Task-list">
            {taskList.toArray().map((task, index) => (
            <li key={index} className="Task-list-item">{task.description}</li>
            ))}
        </ul>
    </div>
  );
};

export default TaskContainer;