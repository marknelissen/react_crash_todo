import { action } from 'typesafe-actions';

export const ADD = 'todos/add';
export const DELETE = 'todos/delete';
export const TOGGLE_COMPLETED = 'todos/toggle_completed';

export const addTodo = (title: string) => action(ADD, title);
export const deleteTodo = (id: string) => action(DELETE, id);
export const toggleCompleted = (id: string) => action(TOGGLE_COMPLETED, id);