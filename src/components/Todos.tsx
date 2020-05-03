import { arrayOf, func, InferProps } from 'prop-types';
import React from 'react';
import Todo from '../proptypes/Todo';
import TodoItem from './TodoItem';

export default function Todos({ onCompleteChanged, onDelete, todos }: TodosProps) {
    return (
        <>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onCompleteChanged={onCompleteChanged} onDelete={onDelete} />
            ))}
        </>
    );
}

Todos.propTypes = {
    onCompleteChanged: func,
    onDelete: func,
    todos: arrayOf(Todo.isRequired).isRequired,
}

interface TodosProps extends InferProps<typeof Todos.propTypes> {
    onCompleteChanged?: (id: string) => unknown,
    onDelete?: (id: string) => unknown,
}