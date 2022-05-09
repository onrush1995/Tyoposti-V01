import React from 'react';

export const FormPass = ({ username, usertype, value, handleChange, labelText }) => {
    return (
        <div className='form-row'>
            <label htmlFor={username} className='form-label'>
                {labelText || username}
            </label>
            <input type={usertype} value={value} name={username} onChange={handleChange} className='form-input' />
        </div>
    );
};
