import { InferProps } from 'prop-types';
import React from 'react';
import Todo from '../proptypes/Todo';

export default function TodoItem({ todo }: InferProps<typeof TodoItem.propTypes>) {
    return (
        <div>
            <p>{todo.title}</p>
        </div>
    )
}

TodoItem.propTypes = {
    todo: Todo.isRequired,
};