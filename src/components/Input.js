import React from 'react';


const Input = ({ input: { onChange, ...restInput }, meta: { error, submitFailed }, type }) => {

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