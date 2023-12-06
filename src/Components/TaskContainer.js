import React, { useState } from 'react';
import Button from './Button';
import addIcon from '../Images/add_icon.png';
import TaskList from '../Models/taskList';
import Task from '../Models/task';


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
    <div>
      <h2>My Tasks</h2>
      <Button icon={addIcon} altText="Add Task" onClick={handleAddClick} />
      {/* if is adding is true, show the input field and save button */}
      {isAdding && (
        <div>
        {/* Save input as newTask, always get the most up to date text field with on change  */}
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
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