import './App.css';

const Button = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

function App() {
  const handleClick = () => {
    console.log('Button clicked')
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LoveDoro Timer</h1>
      </header>
      <p className="App-placeholder">
          00:00
      </p>
      <Button className="App-button" onClick={handleClick}>Start Timer</Button>
    

      <div>
      <ul className="Task-list">
        <li id='task1'>
            Task 1
        </li>
      </ul>
      <ul className="Task-list">
        <li id='task2'>
            Task 2
        </li>
      </ul>
      <ul className="Task-list">
        <li id='task3'>
            Task 3
        </li>
      </ul>
      
    </div>

    </div>
  );
}

export default App;

//commit testing