import React, { CSSProperties } from 'react';

const headerStyle: CSSProperties = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>To Do</h1>
        </header>
    )
}
