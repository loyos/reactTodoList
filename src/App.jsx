import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Todo from './Todo';

function App() {

  const [userInput, setUserInput] = useState('');

  const [toDoList, setToDoList] = useState([]);

  const deleteTask = (e) => {
    console.log("e: ", e);
    let copy = [...toDoList];
    copy.splice(+e, 1)
    setToDoList(copy);
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const addTask = (e) => {
    // e.preventDefault();

    let copy = [...toDoList];
    copy = [...copy, userInput];
    setToDoList(copy);
    setUserInput("")
  }

  return (
    <div>

      <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
      <button onClick={addTask}> Add Task</button>

      <div className="todoList">
        <ul>
          {toDoList.map((todo, index) => {
            return (
              <Todo key={index} id={index} todo={todo} deleteTask={deleteTask} />
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
