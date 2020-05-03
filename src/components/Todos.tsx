import { arrayOf, func, InferProps } from 'prop-types';
import React from 'react';
import Todo from '../proptypes/Todo';
import TodoItem from './TodoItem';

export default function Todos({ onCompleteChanged, todos }: TodosProps) {
    return (
        <>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onCompleteChanged={onCompleteChanged} />
            ))}
        </>
    );
}

Todos.propTypes = {
    onCompleteChanged: func,
    todos: arrayOf(Todo.isRequired).isRequired,
}

interface TodosProps extends InferProps<typeof Todos.propTypes> {
    onCompleteChanged?: (id: number) => unknown,
}