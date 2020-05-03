import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from './HeaderLink';

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
            <HeaderLink to="/">Home</HeaderLink> | <HeaderLink to="/about">About</HeaderLink>
        </header>
    )
}
