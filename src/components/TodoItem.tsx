import { func, InferProps } from 'prop-types';
import React, { CSSProperties, useMemo, useCallback } from 'react';
import Todo from '../proptypes/Todo';

export default function TodoItem({ onCompleteChanged, todo }: TodoItemProps) {
    const style = useMemo((): CSSProperties => ({
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none',
    }), [todo.completed]);

    const handleCheckboxClick = useCallback(
        () => {
            onCompleteChanged?.(todo.id);
        },
        [onCompleteChanged, todo.id],
    )

    return (
        <div style={style}>
            <p>
                <input type="checkbox" onClick={handleCheckboxClick} /> {' '}
                {todo.title}
            </p>
        </div>
    )
}

TodoItem.propTypes = {
    onCompleteChanged: func,
    todo: Todo.isRequired,
}

interface TodoItemProps extends InferProps<typeof TodoItem.propTypes> {
    onCompleteChanged?: (id: number) => unknown,
}