import React, { useCallback, useReducer } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Todos from './components/Todos';
import { addTodo, deleteTodo, toggleCompleted } from './reducers/todos/actions';
import { todosInitialState, todosReducer } from './reducers/todos/reducer';

export default () => {
  const [todos, dispatch] = useReducer(todosReducer, todosInitialState);

  const handleAdd = useCallback(
    (title: string) => {
      dispatch(addTodo(title))
    },
    []
  )

  const handleCompletedChanged = useCallback(
    (id: string) => {
      dispatch(toggleCompleted(id))
    },
    [],
  );

  const handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteTodo(id));
    },
    [],
  );

  return (
    <div className="container">
      <Header />
      <AddTodo onAdd={handleAdd} />
      <Todos todos={todos} onCompleteChanged={handleCompletedChanged} onDelete={handleDelete} />
    </div>
  );
}
