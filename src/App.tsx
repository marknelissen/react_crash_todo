import React, { useCallback, useReducer } from 'react';
import './App.css';
import Todos from './components/Todos';
import { toggleCompleted, deleteTodo } from './reducers/todos/actions';
import { todosInitialState, todosReducer } from './reducers/todos/reducer';

export default () => {
  const [todos, dispatch] = useReducer(todosReducer, todosInitialState);

  const handleCompletedChanged = useCallback(
    (id: number) => {
      dispatch(toggleCompleted(id))
    },
    [],
  );

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [],
  );

  return (
    <div className="App">
      <Todos todos={todos} onCompleteChanged={handleCompletedChanged} onDelete={handleDelete} />
    </div>
  );
}
