import { action } from 'typesafe-actions';

export const DELETE = 'todos/delete';
export const TOGGLE_COMPLETED = 'todos/toggle_completed';

export const deleteTodo = (id: number) => action(DELETE, id);
export const toggleCompleted = (id: number) => action(TOGGLE_COMPLETED, id);