import { func, InferProps } from 'prop-types';
import React, { CSSProperties, useMemo, useCallback } from 'react';
import Todo from '../proptypes/Todo';

const btnStyle: CSSProperties = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 7px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

export default function TodoItem({ onCompleteChanged, onDelete, todo }: TodoItemProps) {
    const style = useMemo((): CSSProperties => ({
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none',
    }), [todo.completed]);

    const handleCheckboxChange = useCallback(
        () => {
            onCompleteChanged?.(todo.id);
        },
        [onCompleteChanged, todo.id],
    );

    const handleDeleteClick = useCallback(
        () => {
            onDelete?.(todo.id);
        },
        [onDelete, todo.id]
    );

    return (
        <div style={style}>
            <p>
                <input type="checkbox" onChange={handleCheckboxChange} checked={todo.completed} /> {' '}
                {todo.title}
                <button style={btnStyle} onClick={handleDeleteClick}>X</button>
            </p>
        </div>
    )
}

TodoItem.propTypes = {
    onCompleteChanged: func,
    onDelete: func,
    todo: Todo.isRequired,
}

interface TodoItemProps extends InferProps<typeof TodoItem.propTypes> {
    onCompleteChanged?: (id: string) => unknown,
    onDelete?: (id: string) => unknown,
}