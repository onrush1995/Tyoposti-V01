import React, { useState } from 'react';
import GlobalStyle from '../resources/normalizestyle /SignUp';
import Tyoposti from '../component/Tyoposti';
import FromInfo from '../component/FromInfo';
import { Notify } from '../component';
import { useFullContext } from '../context/fullContext';

const primaryData = {
    name: '',
    email: '',
    password: '',
    isClient: false
};

const Signup = () => {
    const [
        values,
        setValues
    ] = useState(primaryData);

    const { showNotification, isLoading, poupNotification, signupUser } = useFullContext();

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handelSubmit = (event) => {
        event.preventDefault();

        const { name, email, password, isClient } = values;

        if (!email || !password || (!isClient && !name)) {
            poupNotification();
            return;
        }
        const currentUser = { name, email, password };
        if (isClient) {
            console.log('Registered entity');
        }
        else {
            signupUser(currentUser);
        }
        console.log(values);
    };

    const switchMember = () => {
        setValues({ ...values, isClient: !values.isClient });
    };
    return (
        <GlobalStyle className='full-page'>
            <form className='form' onSubmit={handelSubmit}>
                <Tyoposti />
                <h3>{values.isClient ? 'Signin' : 'Signup'}</h3>
                {showNotification && <Notify />}

                {/* User information collector */}

                {!values.isClient && <FromInfo type='text' name='name' value={values.name} onChange={onChange} />}

                {/*------- user email input box -------*/}
                <FromInfo type='email' name='email' value={values.email} onChange={onChange} />

                {/*------- user password-------*/}
                <FromInfo type='password' name='password' value={values.password} onChange={onChange} />

                <button type='submit' className='buttn submit-button' disabled={isLoading}>
                    submit
                </button>
                <p>
                    {values.isClient ? 'Not a registered client?' : 'Already a registered client?'}
                    <button type='button' onClick={switchMember} className='toggle-btn'>
                        {values.isClient ? 'Signup' : 'Signin'}
                    </button>
                </p>
            </form>
        </GlobalStyle>
    );
};

export default Signup;
