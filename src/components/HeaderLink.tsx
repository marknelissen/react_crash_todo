import React, { CSSProperties } from 'react';
import { string, InferProps, node } from 'prop-types';
import { Link } from 'react-router-dom';

const linkStyle: CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
}

export default function HeaderLink({ children, to }: InferProps<typeof HeaderLink.propTypes>) {
    return (
        <Link to={to} style={linkStyle}>
            {children}
        </Link>
    )
}

HeaderLink.propTypes = {
    children: node,
    to: string.isRequired,
}