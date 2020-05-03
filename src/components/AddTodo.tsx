import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { func, InferProps } from 'prop-types';

export default function AddTodo({ onAdd }: Props) {
    const [title, setTitle] = useState('');
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd?.(title);
        setTitle('');
    }, [onAdd, title]);
    return (
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Add Todo ..."
                style={{
                    flex: 10,
                    padding: '5px',
                }}
                value={title}
                onChange={handleChange}
            />
            <input
                type="submit"
                value="Submit"
                className="btn"
                style={{ flex: 1 }}
            />
        </form>
    )
}

AddTodo.propTypes = {
    onAdd: func,
}

interface Props extends InferProps<typeof AddTodo.propTypes> {
    onAdd?: (title: string) => unknown;
}