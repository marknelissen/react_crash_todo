import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';

interface Todo {
    id: number,
    title: string,
    completed: boolean,
}

export const todosInitialState: Todo[] = [
    {
        id: 1,
        title: 'Take out the trash',
        completed: false,
    },
    {
        id: 2,
        title: 'Do the laundry',
        completed: true,
    },
    {
        id: 3,
        title: 'Go shopping',
        completed: false,
    },
];

export const todosReducer = createReducer<Todo[], ActionType<typeof actions>>(todosInitialState)
    .handleType(actions.TOGGLE_COMPLETED, (state, action) => state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo))