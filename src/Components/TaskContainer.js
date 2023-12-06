// TaskContainer.js
import React, { useState } from 'react';
import Button from './Button';
import addIcon from '../Images/add_icon.png';
import TaskList from '../Models/taskList';

const TaskContainer = () => {
  const [taskList, setTaskList] = useState(new TaskList());
  const [newTask, setNewTask] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleSaveClick = () => {
    taskList.insertTask(newTask);
    setNewTask('');
    setIsAdding(false);
  };

  return (
    <div>
      <h2>My Tasks</h2>
      <Button icon={addIcon} altText="Add Task" onClick={handleAddClick} />
      {isAdding && (
        <div>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
      <ul>
        {taskList.toArray().map((task, index) => (
        <li key={index}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskContainer;