import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../resources/image/404.svg';
import styled from 'styled-components';

const GlobalStyle = styled.main`
    text-align: center;
    p {
        margin-top: 0;
        margin-bottom: 0.5rem;
        text-align: center;
        font-weight: 900;
        color: var(--red-dark);
    }
    a {
        color: var(--primary-500);
        text-decoration: underline;
        text-transform: capitalize;
    }
    img {
        margin-bottom: 2.5rem;
        display: block;
        max-width: 700px;
    }
    justify-content: center;
    display: flex;
    align-items: center;

    h3 {
        margin-bottom: 1rem;
    }
`;

const Errorpage = () => {
    return (
        <GlobalStyle>
            <div>
                <img src={img404} alt='404' />
                <h3>page not found</h3>
                <p>It seems the pages you are looking does not exist</p>
                <Link to='/' className=' buttn error-button '>
                    Back Home
                </Link>
            </div>
        </GlobalStyle>
    );
};

export default Errorpage;
