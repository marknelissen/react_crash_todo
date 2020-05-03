import { action } from 'typesafe-actions';

export const TOGGLE_COMPLETED = 'todos/toggle_completed';

export const toggleCompleted = (id: number) => action(TOGGLE_COMPLETED, id);