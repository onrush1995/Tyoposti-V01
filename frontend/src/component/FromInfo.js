import React from 'react';

const FromInfo = ({ name, value, type, onChange, labelText }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input type={type} value={value} name={name} onChange={onChange} className='form-input-elements' />
        </div>
    );
};

export default FromInfo;
