import React from 'react';
import styled from 'styled-components';
import Tyoposti from '../component/Tyoposti';
import mainland from '../resources/image/mainland.svg';

const MainLanding = () => {
    return (
        <Styled>
            <nav>
                <Tyoposti />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> App
                    </h1>
                    <p>
                        Prioritize wisely
                        <sup>Time & Task</sup>
                    </p>
                    <button
                        style={{
                            fontSize: '3vmin'
                        }}
                        className='buttn buttn-main'
                    >
                        Login/SignUp
                    </button>
                </div>
                <img src={mainland} alt='mainImage' className='img main-img' />
            </div>
        </Styled>
    );
};

const Styled = styled.main`
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: block;

        align-items: center;
    }
    .page {
        min-height: calc(100vh -var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
        font-weight: 900;
    }
    h1 {
        font-weight: 700;
        span {
            color: var(--tracker-1);
            text-align: center;
            font-size: 8vmin;
        }
    }

    .main-img {
        display: none;
    }
    @media (min-width: 990px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`;

export default MainLanding;
