import React from 'react';

const Button = ({ handler, children }) => {
    return (
        <button
            onClick={() => handler && handler()}
        >
            {children}
        </button>
    );
};

export default Button;