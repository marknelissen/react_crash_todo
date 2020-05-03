import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';

export default () => {
  const [todos] = useState([
    {
      id: 1,
      title: 'Take out the trash',
      completed: false,
    },
    {
      id: 2,
      title: 'Do the laundry',
      completed: false,
    },
    {
      id: 3,
      title: 'Go shopping',
      completed: false,
    },
  ])
  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}
