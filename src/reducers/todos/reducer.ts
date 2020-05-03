import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { v4 } from 'uuid';

interface Todo {
    id: string,
    title: string,
    completed: boolean,
}

export const todosInitialState: Todo[] = [
    {
        id: v4(),
        title: 'Take out the trash',
        completed: false,
    },
    {
        id: v4(),
        title: 'Do the laundry',
        completed: true,
    },
    {
        id: v4(),
        title: 'Go shopping',
        completed: false,
    },
];

export const todosReducer = createReducer<Todo[], ActionType<typeof actions>>(todosInitialState)
    .handleType(actions.ADD, (state, action) => state.concat({
        id: v4(),
        title: action.payload,
        completed: false,
    }))
    .handleType(actions.DELETE, (state, action) => state.filter(todo => todo.id !== action.payload))
    .handleType(actions.TOGGLE_COMPLETED, (state, action) => state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo))