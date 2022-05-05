import React from 'react';
import Tyoposti from '../component/Tyoposti';
import mainland from '../resources/image/mainland.svg';

const MainLanding = () => {
    return (
        <main>
            <nav>
                <Tyoposti />
            </nav>
            <div>
                <div>
                    <h1>
                        job <span>tracking</span> App
                    </h1>
                    <button className='buttn buttn-main'>Login/SignUp</button>
                </div>
            </div>
        </main>
    );
};

export default MainLanding;
