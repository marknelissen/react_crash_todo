import { arrayOf, InferProps } from 'prop-types';
import React from 'react';
import Todo from '../proptypes/Todo';
import TodoItem from './TodoItem';

export default function Todos({ todos }: InferProps<typeof Todos.propTypes>) {
    return (
        <>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </>
    );
}

Todos.propTypes = {
    todos: arrayOf(Todo.isRequired).isRequired,
};