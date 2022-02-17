import './App.css';
import React, { useState } from 'react';

function Todo(props) {

    return (
        <li>
            {props.todo} {props.id} <span onClick={() => props.deleteTask(props.id)}> X </span>
        </li>
    );
}

export default Todo;
