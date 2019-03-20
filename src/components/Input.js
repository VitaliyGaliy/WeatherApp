import React from 'react';


const Input = ({ input: { onChange, ...restInput }, meta: { error, touched, active, submitFailed }, type, meta }) => {
    console.log('error', error);

    return (
        <input
            type={type}
            required={error && submitFailed ? true : false}
            onChange={onChange}
            {...restInput}
        />
    )
}

export default Input;