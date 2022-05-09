import React, { useState } from 'react';
import GlobalStyle from '../resources/normalizestyle /SignUp';
import Tyoposti from '../component/Tyoposti';

const primaryData = {
    userName: '',
    usetemail: '',
    userpassword: '',
    userIsMember: true
};

const Signup = () => {
    const [
        values,
        setValues
    ] = useState(primaryData);

    const onChange = (event) => {
        console.log(event.target);
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
    };
    return (
        <GlobalStyle className='full-page'>
            <form className='form' onSubmit={handelSubmit}>
                <Tyoposti />
                <h3>Signin</h3>
                <div className='form-row'>
                    <label htmlFor='userName' className='form-label'>
                        Name
                    </label>
                    <input
                        type='text'
                        value={values.userName}
                        userName='userName'
                        onChange={onChange}
                        className='form-input-elements'
                    />
                </div>
                <button type='submit' className='buttn submit-button'>
                    {' '}
                    submit
                </button>
            </form>
        </GlobalStyle>
    );
};

export default Signup;
