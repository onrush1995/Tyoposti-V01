import React, { useState } from 'react';
import GlobalStyle from '../resources/normalizestyle /SignUp';
import Tyoposti from '../component/Tyoposti';
import FromInfo from '../component/FromInfo';
import { Notify } from '../component';

const primaryData = {
    userName: '',
    userEmail: '',
    userpassword: '',
    userIsMember: true,
    showNotification: true
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
                {values.showNotification && <Notify />}

                {/* User information collector */}

                {/*------- user name input box-------*/}
                <FromInfo type='text' name='Name' value={values.userName} onChange={onChange} />

                {/*------- user email input box -------*/}
                <FromInfo type='email' name='Email' value={values.userEmail} onChange={onChange} />

                {/*------- user password-------*/}
                <FromInfo type='password' name='password' value={values.userEmail} onChange={onChange} />

                <button type='submit' className='buttn submit-button'>
                    {' '}
                    submit
                </button>
            </form>
        </GlobalStyle>
    );
};

export default Signup;
